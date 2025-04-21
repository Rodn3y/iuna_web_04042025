import Image from "next/image"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Datenschutzerklärung"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Datenschutzerklärung
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <h2>Datenschutz</h2>
            <p>
              Wir haben diese Datenschutzerklärung (Fassung 20.01.2020-311144572) verfasst, um Ihnen gemäß der Vorgaben
              der Datenschutz-Grundverordnung (EU) 2016/679 zu erklären, welche Informationen wir sammeln, wie wir Daten
              verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.
            </p>
            <p>
              Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei
              der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
            </p>

            <h2>Automatische Datenspeicherung</h2>
            <p>
              Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert,
              so auch auf dieser Webseite.
            </p>
            <p>
              Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese
              Webseite gespeichert ist) automatisch Daten wie
            </p>
            <ul>
              <li>die Adresse (URL) der aufgerufenen Webseite</li>
              <li>Browser und Browserversion</li>
              <li>das verwendete Betriebssystem</li>
              <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
              <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
              <li>Datum und Uhrzeit</li>
            </ul>
            <p>in Dateien (Webserver-Logfiles).</p>
            <p>
              In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben
              diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
              rechtswidrigem Verhalten eingesehen werden. Die Rechtsgrundlage besteht nach Artikel 6 Absatz 1 f DSGVO
              (Rechtmäßigkeit der Verarbeitung) darin, dass berechtigtes Interesse daran besteht, den fehlerfreien
              Betrieb dieser Webseite durch das Erfassen von Webserver-Logfiles zu ermöglichen.
            </p>

            <h2>Cookies</h2>
            <p>
              Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu speichern. Im Folgenden erklären wir,
              was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser
              verstehen.
            </p>

            <h3>Was genau sind Cookies?</h3>
            <p>
              Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
              beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten
              speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
            </p>
            <p>
              Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten
              verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere
              Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer
              gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem "Hirn" Ihres
              Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines
              Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
            </p>
            <p>
              Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
              Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen"
              Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen
              Ihre gewohnte Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie
              beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.
            </p>
            <p>
              Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von
              unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics)
              erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die
              Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine
              Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge". Cookies können auch nicht
              auf Informationen Ihres PCs zugreifen.
            </p>
            <p>So können zum Beispiel Cookie-Daten aussehen:</p>
            <ul>
              <li>Name: _ga</li>
              <li>Ablaufzeit: 2 Jahre</li>
              <li>Verwendung: Unterscheidung der Webseitenbesucher</li>
              <li>Beispielhafter Wert: GA1.2.1326744211.152311144572</li>
            </ul>

            <h3>Welche Arten von Cookies gibt es?</h3>
            <p>
              Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in
              der folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die
              verschiedenen Arten von HTTP-Cookies eingehen.
            </p>
            <p>Man kann 4 Arten von Cookies unterscheiden:</p>
            <p>
              <strong>Unbedingt notwendige Cookies</strong>
              <br />
              Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es
              diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und
              später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User
              sein Browserfenster schließt.
            </p>
            <p>
              <strong>Funktionelle Cookies</strong>
              <br />
              Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem
              werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern
              gemessen.
            </p>
            <p>
              <strong>Zielorientierte Cookies</strong>
              <br />
              Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte,
              Schriftgrößen oder Formulardaten gespeichert.
            </p>
            <p>
              <strong>Werbe-Cookies</strong>
              <br />
              Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste
              Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
            </p>
            <p>
              Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie
              zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
            </p>

            <h3>Wie kann ich Cookies löschen?</h3>
            <p>
              Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder
              welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur teilweise
              zuzulassen oder zu deaktivieren. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle
              anderen Cookies zulassen.
            </p>
            <p>
              Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
              Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:
            </p>
            <p>
              <Link
                href="https://support.google.com/chrome/answer/95647?tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </Link>
            </p>
            <p>
              <Link
                href="https://support.apple.com/de-at/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie
              immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
              entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am
              besten ist es Sie suchen die Anleitung in Google mit dem Suchbegriff "Cookies löschen Chrome" oder
              "Cookies deaktivieren Chrome" im Falle eines Chrome Browsers oder tauschen das Wort "Chrome" gegen den
              Namen Ihres Browsers, z.B. Edge, Firefox, Safari aus.
            </p>

            <h3>Wie sieht es mit meinem Datenschutz aus?</h3>
            <p>
              Seit 2009 gibt es die sogenannten „Cookie-Richtlinien". Darin ist festgehalten, dass das Speichern von
              Cookies eine Einwilligung des Website-Besuchers (also von Ihnen) verlangt. Innerhalb der EU-Länder gibt es
              allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland wurden die
              Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser
              Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
            </p>
            <p>
              Wenn Sie mehr über Cookies wissen möchten und vor technischen Dokumentationen nicht zurückscheuen,
              empfehlen wir{" "}
              <Link href="https://tools.ietf.org/html/rfc6265" target="_blank" rel="noopener noreferrer">
                https://tools.ietf.org/html/rfc6265
              </Link>
              , dem Request for Comments der Internet Engineering Task Force (IETF) namens "HTTP State Management
              Mechanism".
            </p>

            <h2>Speicherung persönlicher Daten</h2>
            <p>
              Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name,
              E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder
              Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils
              angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt
              ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
              Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht
              ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.
            </p>
            <p>
              Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine
              sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten
              niemals unverschlüsselt per E-Mail zu übermitteln.
            </p>
            <p>
              Die Rechtsgrundlage besteht nach Artikel 6 Absatz 1 a DSGVO (Rechtmäßigkeit der Verarbeitung) darin, dass
              Sie uns die Einwilligung zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können diesen
              Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht aus, Sie finden unsere Kontaktdaten im
              Impressum.
            </p>

            <h2>Rechte laut Datenschutzgrundverordnung</h2>
            <p>Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die folgende Rechte zu:</p>
            <ul>
              <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
              <li>Recht auf Löschung („Recht auf Vergessenwerden") (Artikel 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
              <li>
                Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung
                personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
              </li>
              <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
              <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
              <li>
                Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling —
                beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)
              </li>
            </ul>
            <p>
              Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre
              datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich an die
              Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI) wenden.
            </p>

            <h2>Auswertung des Besucherverhaltens</h2>
            <p>
              In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs
              dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können
              von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.
            </p>
            <p>
              Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden
              Datenschutzerklärung.
            </p>

            <h2>TLS-Verschlüsselung mit https</h2>
            <p>
              Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung
              Artikel 25 Absatz 1 DSGVO). Durch den Einsatz von TLS (Transport Layer Security), einem
              Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher
              Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen
              Schloßsymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer
              Internetadresse.
            </p>

            <h2>Google Maps Datenschutzerklärung</h2>
            <p>
              Wir benützen auf unserer Website Google Maps der Firma Google Inc. (1600 Amphitheatre Parkway Mountain
              View, CA 94043, USA). Mit Google Maps können wir Standorte visuell besser darstellen und damit unser
              Service verbessern. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den
              Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir
              diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden
              können.
            </p>

            <h3>Was ist Google Maps?</h3>
            <p>
              Google Maps ist ein Online-Kartendienst der Firma Google Inc. Mit Google Maps können Sie im Internet über
              einen PC oder über eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder
              Unternehmen suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch
              weitere Informationen über die Firma angezeigt. Um die Anfahrtsmöglichkeit anzuzeigen, können
              Kartenausschnitte eines Standorts per HTML-Code in eine Website eingebunden werden. Google Maps zeigt die
              Erdoberfläche als Straßenkarte oder als Luft- bzw. Satellitenbild an. Dank der Street View Bilder und den
              qualitativ hochwertigen Satellitenbildern sind sehr genaue Darstellungen möglich.
            </p>

            <h3>Warum verwenden wir Google Maps auf unserer Website?</h3>
            <p>
              All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf
              unserer Website zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten
              Informationen zu diversen Standorten liefern. Dank Google Maps sehen Sie auf einen Blick wo wir unseren
              Firmensitz haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können
              den Anfahrtsweg für Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad
              abrufen. Für uns ist die Bereitstellung von Google Maps Teil unseres Kundenservice.
            </p>

            <h3>Welche Daten werden von Google Maps gespeichert?</h3>
            <p>
              Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen
              und speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und die Breiten-
              bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse
              gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir können Sie
              darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Website eingebunden
              haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser. Dieses Cookie speichert Daten über
              Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und
              individuelle, personalisierte Werbung für Sie bereitzustellen.
            </p>
            <p>Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:</p>
            <ul>
              <li>Name: NID</li>
              <li>Ablaufzeit: nach 6 Monaten</li>
              <li>
                Verwendung: NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe
                des Cookies „erinnert" sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere
                Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine
                einzigartige ID, die Google benutzt, persönliche Einstellungen des Users für Werbezwecke zu sammeln.
              </li>
              <li>Beispielwert: 188=h26c1Ktha7fCQTx8rXgLyATyITJ311144572</li>
            </ul>
            <p>
              Anmerkung: Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten.
              Speziell bei der Verwendung von Cookies sind Veränderungen bei Google nie auszuschließen. Um das Cookie
              NID zu identifizieren, wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden
              war.
            </p>

            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die meisten Server befinden sich allerdings
              in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie genau
              nachlesen wo sich die Google-Rechenzentren befinden:{" "}
              <Link
                href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </Link>
            </p>
            <p>
              Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und
              werden vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle
              Notfallprogramme. Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe
              die Server beeinträchtigt, bleiben die Daten mit hoher Wahrscheinlich dennoch geschützt.
            </p>
            <p>
              Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich
              die Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie
              zum Beispiel Werbedaten) in Serverprotokollen, indem sie einen Teil der IP-Adresse und
              Cookie-Informationen nach 9 bzw.18 Monaten löschen.
            </p>

            <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>
              Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden
              Informationen zur Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3
              oder 18 Monate gespeichert und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch
              jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre Standorterfassung vollständig verhindern wollen,
              müssen Sie im Google-Konto die Rubrik „Web- und App-Aktivität" pausieren. Klicken Sie „Daten und
              Personalisierung" und dann auf die Option „Aktivitätseinstellung". Hier können Sie die Aktivitäten ein-
              bzw. ausschalten.
            </p>
            <p>
              In Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten. Je nach
              dem welchen Browser Sie verwenden, funktioniert dies auf unterschiedliche Art und Weise. Die folgenden
              Anleitungen zeigen, wie Sie Cookies in Ihrem Browser verwalten:
            </p>
            <p>
              <Link
                href="https://support.google.com/chrome/answer/95647?tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </Link>
            </p>
            <p>
              <Link
                href="https://support.apple.com/de-at/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie
              immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
              entscheiden, ob Sie es erlauben oder nicht.
            </p>
            <p>
              Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere
              Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf{" "}
              <Link
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI
              </Link>
              . Wenn Sie mehr über die Datenverarbeitung von Google erfahren wollen, empfehlen wir Ihnen die hauseigene
              Datenschutzerklärung des Unternehmens unter{" "}
              <Link href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy?hl=de
              </Link>
              .
            </p>

            <h2>Google Fonts Datenschutzerklärung</h2>
            <p>
              Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA)
              auf unserer Webseite.
            </p>
            <p>
              Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen.
              Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts)
              werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind
              die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein
              Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung
              von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style
              Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau
              aussieht, werden wir uns noch im Detail ansehen.
            </p>

            <h3>Was sind Google Fonts?</h3>
            <p>
              Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die
              die Google LLC zur freien Verwendung bereitstellt.
            </p>
            <p>
              Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der
              Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen. Somit können wir sie frei
              verwenden, ohne dafür Lizenzgebühren zu zahlen.
            </p>

            <h3>Warum verwenden wir Google Fonts auf unserer Webseite?</h3>
            <p>
              Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem
              eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch
              zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und
              ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen,
              sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sogenannte
              sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern,
              Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte
              bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit
              Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser
              (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten
              modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod).
            </p>
            <p>
              Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie
              möglich darstellen können. Nach dem Art. 6 Abs. 1 f lit. F DSGVO stellt das bereits ein „berechtigtes
              Interesse" an der Verarbeitung von personenbezogenen Daten dar. Unter „berechtigtem Interesse" versteht
              man in diesem Fall sowohl rechtliche als auch wirtschaftliche oder ideelle Interessen, die vom
              Rechtssystem anerkannt werden.
            </p>

            <h3>Welche Daten werden von Google gespeichert?</h3>
            <p>
              Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen
              externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre
              IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um die Erfassung, Speicherung
              und Verwendung von Endnutzerdaten auf das zu reduzieren, was für eine effiziente Bereitstellung von
              Schriften nötig ist. API steht übrigens für „Application Programming Interface" und dient unter anderem
              als Datenübermittler im Softwarebereich.
            </p>
            <p>
              Google Fonts speichert CSS- und Font-Anfragen sicher bei Google und ist somit geschützt. Durch die
              gesammelten Nutzungszahlen kann Google die Beliebtheit der Schriften feststellen. Die Ergebnisse
              veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet
              Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden.
              Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. BigQuery ist ein Webservice
              von Google für Unternehmen, die große Datenmengen bewegen und analysieren wollen.
            </p>
            <p>
              Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie IP-Adresse,
              Spracheinstellungen, Bildschirmauflösung des Browsers, Version des Browsers und Name des Browsers
              automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar
              feststellbar bzw. wird von Google nicht eindeutig kommuniziert.
            </p>

            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Anfragen für CSS-Assets speichert Google einen Tag lang auf Ihren Servern, die hauptsächlich außerhalb der
              EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein
              Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart
              einer Webseite ändern kann.
            </p>
            <p>
              Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von
              Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen,
              werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später
              besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren,
              die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.
            </p>

            <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>
              Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die
              Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu
              können, müssen Sie den Google-Support auf{" "}
              <Link href="https://support.google.com/?hl=de&tid=311144572" target="_blank" rel="noopener noreferrer">
                https://support.google.com/?hl=de&tid=311144572
              </Link>{" "}
              kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.
            </p>
            <p>
              Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir
              können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite
              rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf{" "}
              <Link
                href="https://developers.google.com/fonts/faq?tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/fonts/faq?tid=311144572
              </Link>
              . Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte
              Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig (beinahe unmöglich),
              von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.
            </p>
            <p>
              Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie
              auch auf{" "}
              <Link href="https://www.google.com/intl/de/policies/privacy/" target="_blank" rel="noopener noreferrer">
                https://www.google.com/intl/de/policies/privacy/
              </Link>{" "}
              nachlesen.
            </p>

            <h2>Google Fonts Lokal Datenschutzerklärung</h2>
            <p>
              Wir verwenden Google Fonts der Firma Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA)
              auf unserer Webseite. Wir haben die Google-Schriftarten lokal, d.h. auf unserem Webserver – nicht auf den
              Servern von Google – eingebunden. Dadurch gibt es keine Verbindung zu Server von Google und somit auch
              keine Datenübertragung bzw. Speicherung.
            </p>

            <h3>Was sind Google Fonts?</h3>
            <p>
              Google Fonts (früher Google Web Fonts) ist ein interaktives Verzeichnis mit mehr als 800 Schriftarten, die
              die Google LLC zur freien Verwendung bereitstellt. Mit Google Fonts könnte man die Schriften nutzen, ohne
              sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zum
              Google-Server zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf diese
              Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.
            </p>
            <p>
              Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir
              können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite
              rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf{" "}
              <Link
                href="https://developers.google.com/fonts/faq?tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://developers.google.com/fonts/faq?tid=311144572
              </Link>
              .
            </p>

            <h2>Google Analytics Datenschutzerklärung</h2>
            <p>
              Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen
              Unternehmens Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, USA). Google Analytics sammelt
              Daten über Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese
              Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von
              Google Analytics erhalten, können wir unsere Website und unser Service besser an Ihre Wünsche anpassen. Im
              Folgenden gehen wir näher auf das Tracking Tool ein und informieren Sie vor allem darüber, welche Daten
              gespeichert werden und wie Sie das verhindern können.
            </p>

            <h3>Was ist Google Analytics?</h3>
            <p>
              Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google
              Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere
              Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausführen.
              Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort
              gespeichert.
            </p>
            <p>
              Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter
              anderem um folgende Berichte handeln:
            </p>
            <ul>
              <li>
                Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer,
                wer sich für unser Service interessiert.
              </li>
              <li>
                Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und
                verbessern.
              </li>
              <li>
                Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr
                Menschen für unser Service begeistern können.
              </li>
              <li>
                Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können
                nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.
              </li>
              <li>
                Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft
                eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem
                Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere
                Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.
              </li>
              <li>
                Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel
                sehen wir wie viele User gerade diesen Text lesen.
              </li>
            </ul>
            <h3>Warum verwenden wir Google Analytics auf unserer Webseite?</h3>
            <p>
              Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service bieten. Die Statistiken
              und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.
            </p>
            <p>
              Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer
              Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google
              leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir
              wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service
              zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und
              kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen
              Menschen zu zeigen, die sich dafür interessieren.
            </p>

            <h3>Welche Daten werden von Google Analytics gespeichert?</h3>
            <p>
              Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID, die mit Ihrem
              Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das nächste Mal
              unsere Seite besuchen, werden Sie als „wiederkehrender" User erkannt. Alle gesammelten Daten werden
              gemeinsam mit dieser User-ID gespeichert. So ist es überhaupt erst möglich pseudonyme Userprofile
              auszuwerten.
            </p>
            <p>
              Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf unserer Website
              gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie
              auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können über Google Analytics generierte
              Daten mit Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer
              wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.
            </p>
            <p>Folgende Cookies werden von Google Analytics verwendet:</p>
            <p>
              Name: _ga
              <br />
              Wert:2.1326744211.152311144572-5
              <br />
              Verwendungszweck: Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern.
              Grundsätzlich dient es zur Unterscheidung der Webseitenbesucher.
              <br />
              Ablaufdatum: nach 2 Jahre
            </p>
            <p>
              Name: _gid
              <br />
              Wert:2.1687193234.152311144572-1
              <br />
              Verwendungszweck: Das Cookie dient auch zur Unterscheidung der Webseitenbesucher
              <br />
              Ablaufdatum: nach 24 Stunden
            </p>
            <p>
              Name: _gat_gtag_UA_&lt;property-id&gt;
              <br />
              Wert: 1<br />
              Verwendungszweck: Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics über den Google
              Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.
              <br />
              Ablaufdatum: nach 1 Minute
            </p>
            <p>
              Name: AMP_TOKEN
              <br />
              Wert: keine Angaben
              <br />
              Verwendungszweck: Das Cookie hat einen Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen
              werden kann. Andere mögliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.
              <br />
              Ablaufdatum: nach 30 Sekunden bis zu einem Jahr
            </p>
            <p>
              Name: __utma
              <br />
              Wert:1564498958.1564498958.1564498958.1
              <br />
              Verwendungszweck: Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und sie Leistung
              messen. Das Cookie wird jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.
              <br />
              Ablaufdatum: nach 2 Jahre
            </p>
            <p>
              Name: __utmt
              <br />
              Wert: 1<br />
              Verwendungszweck: Das Cookie wird wie _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate
              verwendet.
              <br />
              Ablaufdatum: nach 10 Minuten
            </p>
            <p>
              Name: __utmb
              <br />
              Wert:3.10.1564498958
              <br />
              Verwendungszweck: Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal
              aktualisiert, wenn neue Daten bzw. Infos an Google Analytics gesendet werden.
              <br />
              Ablaufdatum: nach 30 Minuten
            </p>
            <p>
              Name: __utmc
              <br />
              Wert: 167421564
              <br />
              Verwendungszweck: Dieses Cookie wird verwendet, um neue Sitzungen für wiederkehrende Besucher festzulegen.
              Dabei handelt es sich um ein Session-Cookie und wird nur solange gespeichert, bis Sie den Browser wieder
              schließen.
              <br />
              Ablaufdatum: Nach Schließung des Browsers
            </p>
            <p>
              Name: __utmz
              <br />
              Wert: m|utmccn=(referral)|utmcmd=referral|utmcct=/
              <br />
              Verwendungszweck: Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu
              identifizieren. Das heißt, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann
              eine andere Seite bzw. eine Werbeschaltung gewesen sein.
              <br />
              Ablaufdatum: nach 6 Monate
            </p>
            <p>
              Name: __utmv
              <br />
              Wert: keine Angabe
              <br />
              Verwendungszweck: Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer
              aktualisiert, wenn Informationen an Google Analytics gesendet werden.
              <br />
              Ablaufdatum: nach 2 Jahre
            </p>
            <p>
              Anmerkung: Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google die Wahl ihrer
              Cookies immer wieder auch verändert.
            </p>
            <p>
              Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die mit Google Analytics erhoben werden:
            </p>
            <p>
              Heatmaps: Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie
              anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite „unterwegs" sind.
            </p>
            <p>
              Sitzungsdauer: Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne
              die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.
            </p>
            <p>
              Absprungrate (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine
              Seite ansehen und dann unsere Website wieder verlassen.
            </p>
            <p>
              Kontoerstellung: Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt
              Google Analytics diese Daten.
            </p>
            <p>
              IP-Adresse: Die IP-Adresse wird nur in gekürzter Form dargestellt, damit keine eindeutige Zuordnung
              möglich ist.
            </p>
            <p>
              Standort: Über die IP-Adresse kann das Land und Ihr ungefährer Standort bestimmt werden. Diesen Vorgang
              bezeichnet man auch als IP- Standortbestimmung.
            </p>
            <p>
              Technische Informationen: Zu den technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr
              Internetanbieter oder Ihre Bildschirmauflösung.
            </p>
            <p>
              Herkunftsquelle: Google Analytics beziehungsweise uns interessiert natürlich auch über welche Website oder
              welche Werbung Sie auf unsere Seite gekommen sind.
            </p>
            <p>
              Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z.B., wenn Sie ein Video
              über unsere Seite abspielen), das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren
              Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und dient nur zu einer allgemeinen
              Orientierung der Datenspeicherung durch Google Analytics.
            </p>

            <h3>Wie lange und wo werden die Daten gespeichert?</h3>
            <p>
              Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und
              folglich werden Ihr Daten meist auf amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo
              sich die Google-Rechenzentren befinden:{" "}
              <Link
                href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.google.com/about/datacenters/inside/locations/?hl=de
              </Link>
            </p>
            <p>
              Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten
              schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es
              entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder
              Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.
            </p>
            <p>
              Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten
              eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die Möglichkeit, die
              Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur Verfügung:
            </p>
            <ul>
              <li>Löschung nach 14 Monaten</li>
              <li>Löschung nach 26 Monaten</li>
              <li>Löschung nach 38 Monaten</li>
              <li>Löschung nach 50 Monaten</li>
              <li>Keine automatische Löschung</li>
            </ul>
            <p>
              Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese
              Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der
              DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden
              unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu
              einer größeren Einheit.
            </p>

            <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
            <p>
              Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu
              erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur
              Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google
              Analytics Ihre Daten verwendet. Das Browser-Add-on können Sie unter{" "}
              <Link href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">
                https://tools.google.com/dlpage/gaoptout?hl=de
              </Link>{" "}
              runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch
              Google Analytics deaktiviert wird.
            </p>
            <p>
              Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics) deaktivieren, löschen oder verwalten
              wollen, gibt es für jeden Browser eine eigene Anleitung:
            </p>
            <p>
              <Link
                href="https://support.google.com/chrome/answer/95647?tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome: Cookies in Chrome löschen, aktivieren und verwalten
              </Link>
            </p>
            <p>
              <Link
                href="https://support.apple.com/de-at/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari: Verwalten von Cookies und Websitedaten mit Safari
              </Link>
            </p>
            <p>
              <Link
                href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Explorer: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              <Link
                href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge: Löschen und Verwalten von Cookies
              </Link>
            </p>
            <p>
              Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und
              sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf{" "}
              <Link
                href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311144572"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311144572
              </Link>
              . Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google
              Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden
              Links:{" "}
              <Link href="http://www.google.com/analytics/terms/de.html" target="_blank" rel="noopener noreferrer">
                http://www.google.com/analytics/terms/de.html
              </Link>{" "}
              und{" "}
              <Link
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
              >
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
