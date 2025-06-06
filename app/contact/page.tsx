"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Calendar, Upload, X, CheckCircle2 } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactPage() {
  const [files, setFiles] = useState<File[]>([])
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formError, setFormError] = useState<string | null>(null)

  // Handle hash navigation when the page loads
  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        // Small delay to ensure the page is fully loaded
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            // Scroll to the element
            element.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
      }
    }
  }, [])

  // Add this useEffect after the other useEffect in the component
  useEffect(() => {
    const preventDefaults = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
    }

    // Prevent default behavior for these events on the document
    ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      document.addEventListener(eventName, preventDefaults, false)
    })

    // Clean up event listeners when component unmounts
    return () => {
      ;["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
        document.removeEventListener(eventName, preventDefaults, false)
      })
    }
  }, [])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // In your handleSubmit function, modify to include the reCAPTCHA token
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(null)

    if (!captchaValue) {
      setFormError("Please complete the reCAPTCHA verification")
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)

      // Add the reCAPTCHA token to the form data
      formData.append("recaptchaToken", captchaValue)

      // Add selected product if any
      if (selectedProduct) {
        formData.append("product", selectedProduct)
      }

      // Add files to form data
      files.forEach((file, index) => {
        formData.append(`file-${index}`, file)
      })

      // Simple fetch without trying to parse the response first
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      // Only try to parse JSON if the response is OK
      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        // Reset form
        e.currentTarget.reset()
        setFiles([])
        setSelectedProduct("")
        setCaptchaValue(null)
        // Reset reCAPTCHA
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
      } else {
        throw new Error(data.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError(error instanceof Error ? error.message : "An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Contact"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Contact</h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-200 sm:text-2xl">Get in touch with us or schedule a meeting</p>
        </div>
      </section>

      {/* Contact Form and Calendar Section */}
      <section className="py-16 md:py-24 bg-white" id="contact-form">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="mt-8 rounded-lg bg-green-50 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900">Thank you for your message!</h3>
                  <p className="mt-2 text-gray-600">We have received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form className="mt-8 space-y-6" onSubmit={handleSubmit} ref={formRef}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input type="text" id="name" name="name" className="mt-1" required />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <Input type="text" id="company" name="company" className="mt-1" required />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input type="email" id="email" name="email" className="mt-1" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <Input type="tel" id="phone" name="phone" className="mt-1" />
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                      Product
                    </label>
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-scanner">AI Scanner</SelectItem>
                        <SelectItem value="weld-seam-scanner">Weld Seam Scanner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="message" name="message" rows={6} className="mt-1" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Attach Files</label>
                    <p className="text-sm text-gray-500 mt-1">
                      Add images of the product to be inspected, example images of defective samples, or a defect
                      catalog.
                    </p>
                    <div className="mt-2">
                      <div
                        className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50"
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onDragEnter={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onDragLeave={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                        onDrop={(e) => {
                          e.preventDefault()
                          e.stopPropagation()

                          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                            const newFiles = Array.from(e.dataTransfer.files)
                            setFiles((prev) => [...prev, ...newFiles])
                          }
                        }}
                      >
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                            >
                              <span>Upload Files</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                multiple
                                onChange={handleFileChange}
                                ref={fileInputRef}
                              />
                            </label>
                            <p className="pl-1">or drag & drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Selected files:</p>
                        <ul className="space-y-2">
                          {files.map((file, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md"
                            >
                              <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-gray-500 hover:text-red-500"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <ReCAPTCHA
                      sitekey="6Lc2tAArAAAAAIN9CObjWB7raxn0LfbJu-QHOhr0"
                      onChange={(value) => setCaptchaValue(value)}
                    />
                    {formError && <p className="mt-2 text-sm text-red-600">{formError}</p>}
                  </div>

                  <div>
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || !captchaValue}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Calendar */}
            <div id="schedule-consultation">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Schedule a Meeting</h2>
              <p className="mt-4 text-lg text-gray-600 mb-6">
                Schedule a meeting with Jan Nabatian to discuss your specific requirements.
              </p>
              <div className="rounded-lg overflow-hidden border border-gray-200 h-[600px]">
                <iframe
                  src="https://meetings-eu1.hubspot.com/jan-nabatian?embed=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  allow="camera; microphone; fullscreen; display-capture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info and Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">E-Mail</p>
                    <a href="mailto:sales@iuna.ai" className="mt-1 text-gray-600 hover:text-primary">
                      sales@iuna.ai
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Phone</p>
                    <a href="tel:+4915255386189" className="mt-1 text-gray-600 hover:text-primary">
                      +49 152 5538 6189
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Address</p>
                    <p className="mt-1 text-gray-600">
                      IUNA AI Systems GmbH
                      <br />
                      Humboldtstr. 14
                      <br />
                      74199 Untergruppenbach
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Business Hours</p>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.6991203029246!2d9.2982413!3d49.0039444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982feb3f36f741%3A0x1ef0dcda750483d4!2sIUNA%20AI!5e0!3m2!1sen!2sde!4v1711057234567!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IUNA AI Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
