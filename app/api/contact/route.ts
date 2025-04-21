import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Add this function to verify the reCAPTCHA token
async function verifyRecaptcha(token: string) {
  // Use the environment variable for the secret key
  const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6Lc2tAArAAAAAC6EKo4rH1-dMC6j6NHQhqwz2Qyo"

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error("reCAPTCHA verification error:", error)
    return false
  }
}

// Configure nodemailer transporter outside the request handler
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    // Verify reCAPTCHA
    const recaptchaToken = formData.get("recaptchaToken") as string
    if (!recaptchaToken) {
      return NextResponse.json({ error: "reCAPTCHA token is missing" }, { status: 400 })
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
    if (!isRecaptchaValid) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
    }

    // Extract form fields
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "Not provided"
    const product = (formData.get("product") as string) || "Not specified"
    const message = formData.get("message") as string

    // Count files
    let fileCount = 0
    const fileAttachments = []
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("file-") && value instanceof Blob) {
        fileCount++

        // Convert file to buffer for email attachment
        const buffer = Buffer.from(await value.arrayBuffer())
        fileAttachments.push({
          filename: (value as File).name,
          content: buffer,
        })
      }
    }

    console.log(`Received ${fileCount} file(s) with the form submission`)

    // Prepare email content
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Product:</strong> ${product}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <p><strong>Files Attached:</strong> ${fileCount}</p>
    `

    // Send email
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: "sales@iuna.ai",
        subject: `New Contact Form Submission from ${name}`,
        html: emailContent,
        attachments: fileAttachments,
      })

      console.log("Email sent successfully")
    } catch (error) {
      console.error("Error sending email:", error)
      // Continue execution even if email fails - we'll still return success to the user
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json({ error: "Failed to process form" }, { status: 500 })
  }
}
