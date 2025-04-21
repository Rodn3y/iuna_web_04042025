import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Privacy Policy"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Privacy Policy
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p>
              We have prepared this Privacy Policy (version 20.01.2020-311144572) to explain to you, in accordance with
              the requirements of the General Data Protection Regulation (EU) 2016/679, what information we collect, how
              we use data and what choices you have as a visitor to this website.
            </p>
            <p>
              Unfortunately, it is in the nature of things that these explanations sound very technical, but we have
              tried to describe the most important things as simply and clearly as possible.
            </p>

            <h2>Automatic data storage</h2>
            <p>
              When you visit websites these days, certain information is automatically created and stored, including on
              this website.
            </p>
            <p>
              When you visit our website as you are doing right now, our web server (computer on which this website is
              stored) automatically saves data such as
            </p>
            <ul>
              <li>the address (URL) of the website accessed</li>
              <li>browser and browser version</li>
              <li>the operating system used</li>
              <li>the address (URL) of the previously visited page (referrer URL)</li>
              <li>the host name and IP address of the device from which access is made</li>
              <li>the date and time</li>
            </ul>
            <p>in files (web server log files).</p>
            <p>
              As a rule, web server log files are stored for two weeks and then automatically deleted. We do not pass
              this data on, but we cannot rule out the possibility of this data being viewed in the event of unlawful
              behavior.
            </p>
            <p>
              The legal basis in accordance with Article 6(1)(f) GDPR (lawfulness of processing) is that there is a
              legitimate interest in enabling the error-free operation of this website by collecting web server log
              files.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website uses HTTP cookies to store user-specific data.
              <br />
              Below we explain what cookies are and why they are used so that you can better understand the following
              privacy policy.
            </p>

            <h3>What exactly are cookies?</h3>
            <p>
              Whenever you surf the internet, you use a browser. Well-known browsers include Chrome, Safari, Firefox,
              Internet Explorer and Microsoft Edge. Most websites save small text files in your browser. These files are
              called cookies.
            </p>
            <p>
              One thing cannot be denied: Cookies are really useful little helpers. Almost all websites use cookies.
              More precisely, they are HTTP cookies, as there are also other cookies for other areas of application.
              HTTP cookies are small files that are stored on your computer by our website. These cookie files are
              automatically stored in the cookie folder, the "brain" of your browser, so to speak. A cookie consists of
              a name and a value. When defining a cookie, one or more attributes must also be specified.
            </p>
            <p>
              Cookies store certain user data about you, such as language or personal page settings. When you visit our
              site again, your browser transmits the "user-related" information back to our site. Thanks to cookies, our
              website knows who you are and offers you your usual default settings. In some browsers, each cookie has
              its own file; in others, such as Firefox, all cookies are stored in a single file.
            </p>
            <p>
              There are both first-party cookies and third-party cookies. First-party cookies are created directly by
              our website, third-party cookies are created by partner websites (e.g. Google Analytics). Each cookie must
              be evaluated individually, as each cookie stores different data. The expiry time of a cookie also varies
              from a few minutes to a few years. Cookies are not software programs and do not contain viruses, Trojans
              or other "malware". Cookies also cannot access information on your PC.
            </p>
            <p>Cookie data can look like this, for example:</p>
            <p>
              <strong>Name:</strong> _ga
              <br />
              <strong>Expiry time:</strong> 2 years
              <br />
              <strong>Use:</strong> Distinguishing website visitors
              <br />
              <strong>Example value:</strong> GA1.2.1326744211.152311144572
            </p>
            <p>A browser should support the following minimum sizes:</p>
            <ul>
              <li>A cookie should be able to contain at least 4096 bytes</li>
              <li>At least 50 cookies should be able to be stored per domain</li>
              <li>A total of at least 3000 cookies should be able to be stored</li>
            </ul>

            <h3>What types of cookies are there?</h3>
            <p>
              The question of which cookies we use in particular depends on the services used and is clarified in the
              following sections of the privacy policy. At this point, we would like to briefly explain the different
              types of HTTP cookies.
            </p>
            <p>There are 4 types of cookies:</p>
            <p>
              <strong>Strictly necessary cookies</strong>
              <br />
              These cookies are necessary to ensure basic website functions. For example, these cookies are needed when
              a user places a product in the shopping cart, then continues surfing on other pages and only goes to the
              checkout later. These cookies ensure that the shopping cart is not deleted even if the user closes their
              browser window.
            </p>
            <p>
              <strong>Functional cookies</strong>
              <br />
              These cookies collect information about user behavior and whether the user receives any error messages.
              These cookies are also used to measure the loading time and the behavior of the website with different
              browsers.
            </p>
            <p>
              <strong>Targeted cookies</strong>
              <br />
              These cookies ensure better user-friendliness. For example, entered locations, font sizes or form data are
              saved.
            </p>
            <p>
              <strong>Advertising cookies</strong>
              <br />
              These cookies are also known as targeting cookies. They are used to deliver customized advertising to the
              user. This can be very practical, but also very annoying.
            </p>
            <p>
              When you visit a website for the first time, you are usually asked which of these types of cookie you
              would like to allow. And of course this decision is also stored in a cookie.
            </p>

            <h3>How can I delete cookies?</h3>
            <p>
              You decide how and whether you want to use cookies. Regardless of which service or website the cookies
              originate from, you always have the option of deleting cookies, allowing them only partially or
              deactivating them. For example, you can block third-party cookies but allow all other cookies.
            </p>
            <p>
              If you want to find out which cookies have been stored in your browser, if you want to change or delete
              cookie settings, you can find this in your browser settings:
            </p>
            <p>
              <Link href="https://support.google.com/chrome/answer/95647?tid=311144572" target="_blank">
                Chrome: Delete, activate and manage cookies in Chrome
              </Link>
            </p>
            <p>
              <Link href="https://support.apple.com/en-us/guide/safari/sfri11471/mac?tid=311144572" target="_blank">
                Safari: Manage cookies and website data with Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?tid=311144572"
                target="_blank"
              >
                Firefox: Delete cookies to remove data that websites have stored on your computer
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=311144572"
                target="_blank"
              >
                Internet Explorer: Delete and manage cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=311144572"
                target="_blank"
              >
                Microsoft Edge: Delete and manage cookies
              </Link>
            </p>
            <p>
              If you generally do not want to have cookies, you can set up your browser so that it always informs you
              when a cookie is to be set. You can then decide for each individual cookie whether or not to allow it. The
              procedure differs depending on the browser. It is best to search for the instructions in Google using the
              search term "delete cookies Chrome" or "deactivate cookies Chrome" in the case of a Chrome browser or
              replace the word "Chrome" with the name of your browser, e.g. Edge, Firefox, Safari.
            </p>

            <h3>What about my data protection?</h3>
            <p>
              The so-called "cookie guidelines" have been in place since 2009. These state that the storage of cookies
              requires the consent of the website visitor (i.e. you). However, there are still very different reactions
              to these guidelines within the EU countries. In Germany, the cookie directives have not been implemented
              as national law. Instead, this directive was largely implemented in Section 15 (3) of the German Telemedia
              Act (TMG).
            </p>
            <p>
              If you would like to know more about cookies and do not shy away from technical documentation, we
              recommend{" "}
              <Link href="https://tools.ietf.org/html/rfc6265" target="_blank">
                https://tools.ietf.org/html/rfc6265
              </Link>
              , the Request for Comments of the Internet Engineering Task Force (IETF) called "HTTP State Management
              Mechanism".
            </p>

            <h2>Storage of personal data</h2>
            <p>
              Personal data that you transmit to us electronically on this website, such as your name, e-mail address,
              address or other personal details when submitting a form or comments on the blog, will be used by us
              together with the time and IP address only for the purpose stated in each case, stored securely and not
              passed on to third parties.
            </p>
            <p>
              We therefore only use your personal data to communicate with those visitors who expressly request contact
              and to process the services and products offered on this website. We do not pass on your personal data
              without your consent, but we cannot rule out the possibility of this data being viewed in the event of
              unlawful behavior.
            </p>
            <p>
              If you send us personal data by e-mail - i.e. outside of this website - we cannot guarantee the secure
              transmission and protection of your data. We recommend that you never send confidential data unencrypted
              by email.
            </p>
            <p>
              The legal basis according to Article 6 paragraph 1 a GDPR (lawfulness of processing) is that you give us
              your consent to process the data you have entered. You can revoke this consent at any time - an informal
              e-mail is sufficient, you will find our contact details in the imprint.
            </p>

            <h2>Rights under the General Data Protection Regulation</h2>
            <p>You have the following rights under the provisions of the GDPR</p>
            <ul>
              <li>Right to rectification (Article 16 GDPR)</li>
              <li>Right to erasure ("right to be forgotten") (Article 17 GDPR)</li>
              <li>Right to restriction of processing (Article 18 GDPR)</li>
              <li>
                Right to notification - notification obligation in connection with the rectification or erasure of
                personal data or the restriction of processing (Article 19 GDPR)
              </li>
              <li>Right to data portability (Article 20 GDPR)</li>
              <li>Right to object (Article 21 GDPR)</li>
              <li>
                Right, not to be subject to a decision based solely on automated processing, including profiling
                (Article 22 GDPR)
              </li>
            </ul>
            <p>
              If you believe that the processing of your data violates data protection law or your data protection
              claims have otherwise been violated in any way, you can contact the Federal Commissioner for Data
              Protection and Freedom of Information (BfDI).
            </p>

            <h2>Evaluation of visitor behavior</h2>
            <p>
              In the following privacy policy, we inform you whether and how we evaluate data from your visit to this
              website. The evaluation of the collected data is generally anonymous and we cannot draw any conclusions
              about your person from your behavior on this website.
            </p>
            <p>
              You can find out more about how to object to this analysis of your visit data in the following privacy
              policy.
            </p>

            <h2>TLS encryption with https</h2>
            <p>
              We use https to transmit data securely on the internet (data protection by design Article 25(1) GDPR). By
              using TLS (Transport Layer Security), an encryption protocol for secure data transmission on the Internet,
              we can ensure the protection of confidential data. You can recognize the use of this data transmission
              security by the small lock symbol at the top left of the browser and the use of the https scheme (instead
              of http) as part of our Internet address.
            </p>

            <h2>Google Maps Privacy Policy</h2>
            <p>
              We use Google Maps from Google Inc (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) on our
              website. Google Maps enables us to better visualize locations and thus improve our service. By using
              Google Maps, data is transmitted to Google and stored on Google servers. We would now like to go into more
              detail about what Google Maps is, why we use this Google service, what data is stored and how you can
              prevent this.
            </p>

            <h3>What is Google Maps?</h3>
            <p>
              Google Maps is an online map service provided by Google Inc. Google Maps allows you to search for the
              exact locations of cities, places of interest, accommodation or businesses on the Internet using a PC or
              an app. If companies are represented on Google My Business, further information about the company is
              displayed in addition to the location. Map sections of a location can be integrated into a website using
              HTML code to show how to get there. Google Maps displays the earth's surface as a street map or as an
              aerial or satellite image. Thanks to the Street View images and the high-quality satellite images, very
              accurate representations are possible.
            </p>

            <h3>Why do we use Google Maps on our website?</h3>
            <p>
              All our efforts on this site are aimed at providing you with a useful and meaningful time on our website.
              By integrating Google Maps, we can provide you with the most important information on various locations.
              Thanks to Google Maps, you can see at a glance where we are based. The directions always show you the best
              or quickest way to reach us. You can call up the directions for routes by car, public transport, on foot
              or by bike. For us, the provision of Google Maps is part of our customer service.
            </p>

            <h3>What data is stored by Google Maps?</h3>
            <p>
              In order for Google Maps to provide its full service, the company needs to collect and store data from
              you. This includes the search terms you enter, your IP address and the latitude and longitude coordinates.
              If you use the route planner function, the start address you enter is also saved. However, this data
              storage takes place on the Google Maps websites. We can only inform you about this, but cannot influence
              it. As we have integrated Google Maps into our website, Google sets at least one cookie (name: NID) in
              your browser. This cookie stores data about your user behavior. Google uses this data primarily to
              optimize its own services and to provide you with individual, personalized advertising.
            </p>
            <p>The following cookie is set in your browser due to the integration of Google Maps:</p>
            <p>
              <strong>Name:</strong> NID
              <br />
              <strong>Expiry:</strong> After 6 months
              <br />
              <strong>Use:</strong> NID is used by Google to tailor ads to your Google search. With the help of the
              cookie, Google "remembers" your most frequently entered search queries or your previous interactions with
              ads. This way, you always receive tailored ads. The cookie contains a unique ID that Google uses to
              collect the user's personal settings for advertising purposes.
              <br />
              <strong>Example value:</strong> 188=h26c1Ktha7fCQTx8rXgLyATyITJ311144572
            </p>
            <p>
              Note: We cannot guarantee the completeness of the stored data. Especially when using cookies, changes by
              Google can never be ruled out. To identify the NID cookie, a separate test page was created that
              exclusively included Google Maps.
            </p>

            <h3>How long and where is the data stored?</h3>
            <p>
              Google servers are located in data centers around the world. However, most servers are located in the
              United States. For this reason, your data is increasingly stored in the USA. You can find out exactly
              where Google's data centers are located here:{" "}
              <Link href="https://www.google.com/about/datacenters/inside/locations/?hl=de" target="_blank">
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </Link>
            </p>
            <p>
              Google distributes data across various storage devices. This makes it faster to access and better
              protected against any attempts at tampering. Each data center also has special emergency programs. If, for
              example, there are problems with Google hardware or a natural disaster affects the servers, the data will
              most likely remain protected.
            </p>
            <p>
              Google stores some data for a set period of time. For other data, Google only offers the option to delete
              it manually. Furthermore, the company also anonymizes information (such as advertising data) in server
              logs by deleting part of the IP address and cookie information after 9 or 18 months, respectively.
            </p>

            <h3>How can I delete my data or prevent data storage?</h3>
            <p>
              With the automatic deletion of location and activity data introduced in 2019, information about location
              determination and web/app activity is stored for either 3 or 18 months, depending on your choice, and then
              deleted. You can also manually delete this data from your history at any time via your Google Account. If
              you want to completely prevent your location tracking, you must pause the "Web and App Activity" section
              in your Google Account. Click "Data and Personalization" and then the "Activity Settings" option. Here you
              can turn activities on or off.
            </p>
            <p>
              You can also deactivate, delete, or manage individual cookies in your browser. This works differently
              depending on the browser you use. The following instructions show you how to manage cookies in your
              browser:
            </p>
            <p>
              <Link href="https://support.google.com/chrome/answer/95647?tid=311144572" target="_blank">
                Chrome: Delete, enable, and manage cookies in Chrome
              </Link>
            </p>
            <p>
              <Link href="https://support.apple.com/en-us/guide/safari/sfri11471/mac?tid=311144572" target="_blank">
                Safari: Manage cookies and website data with Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?tid=311144572"
                target="_blank"
              >
                Firefox: Delete cookies to remove data that websites have stored on your computer
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=311144572"
                target="_blank"
              >
                Internet Explorer: Delete and manage cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=311144572"
                target="_blank"
              >
                Microsoft Edge: Delete and manage cookies
              </Link>
            </p>
            <p>
              If you generally do not want cookies, you can set your browser to always inform you when a cookie is about
              to be set. This way, you can decide for each individual cookie whether to accept it or not.
            </p>
            <p>
              Google is an active participant in the EU-U.S. Privacy Shield Framework, which regulates the correct and
              secure transfer of personal data. You can find more information at{" "}
              <Link href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" target="_blank">
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI
              </Link>
              . If you would like to learn more about Google's data processing, we recommend reading the company's own
              privacy policy at{" "}
              <Link href="https://policies.google.com/privacy?hl=de" target="_blank">
                https://policies.google.com/privacy?hl=de
              </Link>
              .
            </p>

            <h2>Google Fonts Privacy Policy</h2>
            <p>
              We use Google Fonts from Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) on our
              website.
            </p>
            <p>
              You do not need to log in or enter a password to use Google Fonts. Furthermore, no cookies are stored in
              your browser. The files (CSS, fonts) are requested via the Google domains fonts.googleapis.com and
              fonts.gstatic.com. According to Google, requests for CSS and fonts are completely separate from all other
              Google services. If you have a Google Account, you don't need to worry about your Google Account data
              being transmitted to Google while using Google Fonts. Google records the use of CSS (Cascading Style
              Sheets) and the fonts used and stores this data securely. We'll look at the exact details of this data
              storage later.
            </p>

            <h3>What are Google Fonts?</h3>
            <p>
              Google Fonts (formerly Google Web Fonts) is an interactive directory of more than 800 fonts that Google
              LLC provides for free use.
            </p>
            <p>
              Many of these fonts are published under the SIL Open Font License, while others are published under the
              Apache License. Both are free software licenses. This means we can use them freely without paying any
              royalties.
            </p>

            <h3>Why do we use Google Fonts on our website?</h3>
            <p>
              With Google Fonts, we can use fonts on our own website without having to upload them to our own server.
              Google Fonts is an important component in maintaining the high quality of our website. All Google Fonts
              are automatically optimized for the web, which saves data volume and is a major advantage, especially for
              use on mobile devices. When you visit our site, the small file size ensures fast loading times.
              Furthermore, Google Fonts are so-called secure web fonts. Different image synthesis systems (rendering) in
              different browsers, operating systems, and mobile devices can lead to errors. Such errors can visually
              distort text or entire web pages. Thanks to the fast Content Delivery Network (CDN), there are no
              cross-platform issues with Google Fonts. Google Fonts supports all common browsers (Google Chrome, Mozilla
              Firefox, Apple Safari, Opera) and works reliably on most modern mobile operating systems, including
              Android 2.2+ and iOS 4.2+ (iPhone, iPad, iPod).
            </p>
            <p>
              We use Google Fonts so that we can present our entire online service as beautifully and consistently as
              possible. According to Art. 6 (1) (f) (f) GDPR, this already constitutes a "legitimate interest" in the
              processing of personal data. "Legitimate interest" in this case refers to both legal and economic or
              non-material interests recognized by the legal system.
            </p>

            <h3>What data does Google store?</h3>
            <p>
              When you visit our website, the fonts are loaded via a Google server. This external call transmits data to
              the Google servers. This also allows Google to recognize that you or your IP address are visiting our
              website. The Google Fonts API was developed to reduce the collection, storage, and use of end-user data to
              what is necessary for the efficient provision of fonts. API stands for "Application Programming Interface"
              and serves, among other things, as a data transmitter in the software sector.
            </p>
            <p>
              Google Fonts securely stores CSS and font requests with Google and is therefore protected. The collected
              usage data allows Google to determine the popularity of fonts. Google publishes the results on internal
              analysis pages, such as Google Analytics. Google also uses data from its own web crawler to determine
              which websites use Google Fonts. This data is published in the Google Fonts BigQuery database. BigQuery is
              a Google web service for companies that want to manage and analyze large amounts of data.
            </p>
            <p>
              It's important to note, however, that every Google Font request automatically transmits information such
              as IP address, language settings, browser screen resolution, browser version, and browser name to Google's
              servers. Whether this data is stored cannot be determined clearly, and Google does not clearly communicate
              this.
            </p>

            <h3>How long and where is the data stored?</h3>
            <p>
              Google stores requests for CSS assets for one day on its servers, which are primarily located outside the
              EU. This allows us to use the fonts using a Google stylesheet. A stylesheet is a formatting template that
              allows you to quickly and easily change the design or font of a website, for example.
            </p>
            <p>
              Font files are stored by Google for one year. Google's goal is to fundamentally improve the loading time
              of websites. If millions of websites link to the same fonts, they are cached after the first visit and
              immediately appear on all other websites visited subsequently. Google sometimes updates font files to
              reduce file size, increase language coverage, and improve design.
            </p>

            <h3>How can I delete my data or prevent data storage?</h3>
            <p>
              The data that Google stores for one day or one year cannot simply be deleted. The data is automatically
              transmitted to Google when a page is accessed. To delete this data prematurely, you must contact Google
              Support at{" "}
              <Link href="https://support.google.com/?hl=de&tid=311144572" target="_blank">
                https://support.google.com/?hl=de&tid=311144572
              </Link>
              . In this case, you can only prevent data storage if you do not visit our site.
            </p>
            <p>
              Unlike other web fonts, Google allows us unrestricted access to all fonts. This means we have unlimited
              access to a sea of fonts and can thus get the most out of our website. You can find out more about Google
              Fonts and other questions at{" "}
              <Link href="https://developers.google.com/fonts/faq?tid=311144572" target="_blank">
                https://developers.google.com/fonts/faq?tid=311144572
              </Link>
              . While Google addresses data protection-related issues there, it doesn't provide truly detailed
              information about data storage. It is relatively difficult (almost impossible) to obtain truly precise
              information about stored data from Google.
            </p>
            <p>
              You can also read about what data Google collects and what this data is used for at{" "}
              <Link href="https://www.google.com/intl/de/policies/privacy/" target="_blank">
                https://www.google.com/intl/de/policies/privacy/
              </Link>
              .
            </p>

            <h2>Google Fonts Local Privacy Policy</h2>
            <p>
              We use Google Fonts from Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) on our
              website. We have embedded the Google Fonts locally, i.e., on our web server – not on Google's servers.
              This means there is no connection to Google's servers and therefore no data transfer or storage.
            </p>

            <h3>What are Google Fonts?</h3>
            <p>
              Google Fonts (formerly Google Web Fonts) is an interactive directory of more than 800 fonts that Google
              LLC provides for free use. With Google Fonts, you can use the fonts without uploading them to your own
              server. However, to prevent any information from being transferred to the Google server, we have
              downloaded the fonts to our server. In this way, we comply with data protection regulations and do not
              send any data to Google Fonts.
            </p>
            <p>
              Unlike other web fonts, Google grants us unrestricted access to all fonts. This gives us unlimited access
              to a sea of fonts, allowing us to get the most out of our website. You can find more information about
              Google Fonts and other questions at{" "}
              <Link href="https://developers.google.com/fonts/faq?tid=311144572" target="_blank">
                https://developers.google.com/fonts/faq?tid=311144572
              </Link>
              .
            </p>

            <h2>Google Analytics Privacy Policy</h2>
            <p>
              We use the analytics tracking tool Google Analytics (GA) from the American company Google LLC (1600
              Amphitheatre Parkway Mountain View, CA 94043, USA) on our website. Google Analytics collects data about
              your actions on our website. For example, if you click on a link, this action is stored in a cookie and
              sent to Google Analytics. Using the reports we receive from Google Analytics, we can better tailor our
              website and our service to your needs. Below, we will discuss the tracking tool in more detail and, above
              all, inform you about what data is stored and how you can prevent this.
            </p>

            <h3>What is Google Analytics?</h3>
            <p>
              Google Analytics is a tracking tool used to analyze our website's traffic. For Google Analytics to work, a
              tracking code is embedded in our website code. When you visit our website, this code records various
              actions you perform on our website. As soon as you leave our website, this data is sent to the Google
              Analytics servers and stored there.
            </p>
            <p>
              Google processes the data, and we receive reports on your user behavior. These reports may include, among
              others, the following:
            </p>
            <ul>
              <li>
                Audience reports: Audience reports help us get to know our users better and determine who is interested
                in our service.
              </li>
              <li>Ad reports: Ad reports help us analyze and improve our online advertising.</li>
              <li>
                Acquisition reports: Acquisition reports provide us with helpful information about how we can attract
                more people to our service.
              </li>
              <li>
                Behavioral reports: These tell us how you interact with our website. We can track the path you take on
                our site and the links you click on.
              </li>
              <li>
                Conversion reports: A conversion is a process in which you perform a desired action based on a marketing
                message. For example, when you go from being a mere website visitor to becoming a buyer or newsletter
                subscriber. These reports help us learn more about how our marketing efforts are resonating with you.
                This is how we want to increase our conversion rate.
              </li>
              <li>
                Real-time reports: These reports let us know immediately what's happening on our website. For example,
                we can see how many users are currently reading this text.
              </li>
            </ul>

            <h3>Why do we use Google Analytics on our website?</h3>
            <p>
              Our goal with this website is clear: to provide you with the best possible service. The statistics and
              data from Google Analytics help us achieve this goal.
            </p>
            <p>
              The statistically analyzed data provides us with a clear picture of the strengths and weaknesses of our
              website. On the one hand, we can optimize our site so that it is easier for interested people to find it
              on Google. On the other hand, the data helps us better understand you as a visitor. This means we know
              exactly what we need to improve on our website to provide you with the best possible service. The data
              also helps us implement our advertising and marketing measures in a more personalized and cost-effective
              way. After all, it only makes sense to show our products and services to people who are interested in
              them.
            </p>

            <h3>What data does Google Analytics store?</h3>
            <p>
              Google Analytics uses a tracking code to create a random, unique ID that is linked to your browser cookie.
              This allows Google Analytics to recognize you as a new user. The next time you visit our site, you will be
              recognized as a "returning" user. All collected data is stored together with this user ID. This makes it
              possible to evaluate pseudonymous user profiles.
            </p>
            <p>
              Using identifiers such as cookies and app instance IDs, your interactions on our website are measured.
              Interactions are all types of actions you perform on our website. If you also use other Google systems
              (such as a Google Account), data generated via Google Analytics may be linked to third-party cookies.
              Google does not share Google Analytics data unless we, as the website operator, approve it. Exceptions may
              apply if required by law.
            </p>
            <p>The following cookies are used by Google Analytics:</p>
            <p>
              <strong>Name:</strong> _ga
              <br />
              <strong>Value:</strong> 2.1326744211.152311144572-5
              <br />
              <strong>Purpose:</strong> By default, analytics.js uses the _ga cookie to store the user ID. It is
              primarily used to distinguish between website visitors.
              <br />
              <strong>Expiry date:</strong> after 2 years
            </p>
            <p>
              <strong>Name:</strong> _gid
              <br />
              <strong>Value:</strong> 2.1687193234.152311144572-1
              <br />
              <strong>Purpose:</strong> This cookie also serves to distinguish between website visitors.
              <br />
              <strong>Expiry date:</strong> after 24 hours
            </p>
            <p>
              <strong>Name:</strong> _gat_gtag_UA_&lt;property-id&gt;
              <br />
              <strong>Value:</strong> 1<br />
              <strong>Purpose:</strong> Used to reduce the request rate. If Google Analytics is provided via Google Tag
              Manager, this cookie is named _dc_gtm_ &lt;property-id&gt;.
              <br />
              <strong>Expiry date:</strong> after 1 minute
            </p>
            <p>
              <strong>Name:</strong> AMP_TOKEN
              <br />
              <strong>Value:</strong> not specified
              <br />
              <strong>Purpose:</strong> This cookie contains a token that can be used to retrieve a user ID from the AMP
              Client ID service. Other possible values indicate a logout, a request, or an error.
              <br />
              <strong>Expiry date:</strong> after 30 seconds to one year
            </p>
            <p>
              <strong>Name:</strong> __utma
              <br />
              <strong>Value:</strong> 1564498958.1564498958.1564498958.1
              <br />
              <strong>Purpose:</strong> This cookie can be used to track your behavior on the website and measure its
              performance. The cookie is updated each time information is sent to Google Analytics.
              <br />
              <strong>Expiry date:</strong> after 2 years
            </p>
            <p>
              <strong>Name:</strong> __utmt
              <br />
              <strong>Value:</strong> 1<br />
              <strong>Purpose:</strong> This cookie, like _gat_gtag_UA_&lt;property-id&gt;, is used to throttle the
              request rate.
              <br />
              <strong>Expiry date:</strong> after 10 minutes
            </p>
            <p>
              <strong>Name:</strong> __utmb
              <br />
              <strong>Value:</strong> 3.10.1564498958
              <br />
              <strong>Purpose:</strong> This cookie is used to determine new sessions. It is updated each time new data
              or information is sent to Google Analytics.
              <br />
              <strong>Expiry date:</strong> after 30 minutes
            </p>
            <p>
              <strong>Name:</strong> __utmc
              <br />
              <strong>Value:</strong> 167421564
              <br />
              <strong>Purpose:</strong> This cookie is used to determine new sessions for returning visitors. This is a
              session cookie and is only stored until you close the browser.
              <br />
              <strong>Expiry date:</strong> after you close the browser
            </p>
            <p>
              <strong>Name:</strong> __utmz
              <br />
              <strong>Value:</strong> m|utmccn=(referral)|utmcmd=referral|utmcct=/
              <br />
              <strong>Purpose:</strong> This cookie is used to identify the source of visitors to our website. This
              means that the cookie stores where you came from. This may have been another site or an advertisement.
              <br />
              <strong>Expiration date:</strong> after 6 months
            </p>
            <p>
              <strong>Name:</strong> __utmv
              <br />
              <strong>Value:</strong> Not specified
              <br />
              <strong>Purpose:</strong> This cookie is used to store custom user data. It is always updated when
              information is sent to Google Analytics.
              <br />
              <strong>Expiry date:</strong> After 2 years
            </p>
            <p>Note: This list cannot claim to be complete, as Google continually changes its cookie choices.</p>
            <p>Here we provide an overview of the most important data collected with Google Analytics:</p>
            <ul>
              <li>
                Heatmaps: Google creates so-called heatmaps. Heatmaps show exactly the areas you click on. This gives us
                information about where you are on our site.
              </li>
              <li>
                Session duration: Google defines the session duration as the time you spend on our site without leaving
                it. If you have been inactive for 20 minutes, the session ends automatically.
              </li>
              <li>Bounce rate: A bounce occurs when you only view one page on our website and then leave again.</li>
              <li>
                Account creation: When you create an account or place an order on our website, Google Analytics collects
                this data.
              </li>
              <li>
                IP address: The IP address is only displayed in abbreviated form so that no clear assignment is
                possible.
              </li>
              <li>
                Location: The IP address can be used to determine the country and your approximate location. This
                process is also known as IP geolocation.
              </li>
              <li>
                Technical information: Technical information includes, among other things, your browser type, your
                internet service provider, and your screen resolution.
              </li>
              <li>
                Source of origin: Google Analytics, or we, are naturally also interested in which website or
                advertisement you came to our site from.
              </li>
            </ul>

            <h3>How long and where is the data stored?</h3>
            <p>
              Google has its servers distributed all over the world. Most servers are located in the United States, and
              therefore your data is mostly stored on American servers. You can find out exactly where Google's data
              centers are located here:{" "}
              <Link href="https://www.google.com/about/datacenters/inside/locations/?hl=de" target="_blank">
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </Link>
            </p>
            <p>
              Your data is distributed across multiple physical storage devices. This has the advantage that the data
              can be accessed more quickly and is better protected against manipulation. Every Google data center has
              appropriate emergency backup programs for your data. If, for example, Google's hardware fails or natural
              disasters cripple servers, the risk of service interruption at Google remains low.
            </p>
            <p>
              Google Analytics defaults to a retention period of 26 months for your user data. Your user data will then
              be deleted. However, we have the option of choosing the retention period for user data ourselves. We have
              five options available for this:
            </p>
            <ul>
              <li>Deletion after 14 months</li>
              <li>Deletion after 26 months</li>
              <li>Deletion after 38 months</li>
              <li>Deletion after 50 months</li>
              <li>No automatic deletion</li>
            </ul>
            <p>
              Once the specified period has expired, the data will be deleted once a month. This retention period
              applies to your data linked to cookies, user recognition, and advertising IDs (e.g., cookies from the
              DoubleClick domain). Report results are based on aggregated data and are stored independently of user
              data. Aggregated data is the merging of individual data into a larger unit.
            </p>

            <h3>How can I delete my data or prevent data storage?</h3>
            <p>
              Under European Union data protection law, you have the right to access, update, delete, or restrict your
              data. You can prevent Google Analytics from using your data by using the browser add-on to deactivate
              Google Analytics JavaScript (ga.js, analytics.js, dc.js). You can download and install the browser add-on
              at{" "}
              <Link href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </Link>
              . Please note that this add-on only deactivates data collection by Google Analytics.
            </p>
            <p>
              If you generally want to deactivate, delete, or manage cookies (independent of Google Analytics), there
              are separate instructions for each browser:
            </p>
            <p>
              <Link href="https://support.google.com/chrome/answer/95647?tid=311144572" target="_blank">
                Chrome: Delete, enable, and manage cookies in Chrome
              </Link>
            </p>
            <p>
              <Link href="https://support.apple.com/en-us/guide/safari/sfri11471/mac?tid=311144572" target="_blank">
                Safari: Manage cookies and website data with Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?tid=311144572"
                target="_blank"
              >
                Firefox: Delete cookies to remove data that websites have stored on your computer
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=311144572"
                target="_blank"
              >
                Internet Explorer: Delete and manage cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=311144572"
                target="_blank"
              >
                Microsoft Edge: Delete and manage cookies
              </Link>
            </p>
            <p>
              Google Analytics is an active participant in the EU-U.S. Privacy Shield Framework, which regulates the
              correct and secure transfer of personal data. You can find more information at{" "}
              <Link
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311144572"
                target="_blank"
              >
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311144572
              </Link>
              . We hope we have been able to provide you with the most important information about data processing by
              Google Analytics. If you would like to learn more about the tracking service, we recommend these two
              links:{" "}
              <Link href="http://www.google.com/analytics/terms/de.html" target="_blank">
                http://www.google.com/analytics/terms/de.html
              </Link>{" "}
              and{" "}
              <Link href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank">
                https://support.google.com/analytics/answer/6004245?hl=de
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
