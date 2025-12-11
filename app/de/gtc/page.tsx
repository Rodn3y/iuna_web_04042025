import Image from "next/image"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Allgemeine Geschäftsbedingungen (AGB) | IUNA AI",
  description:
    "Allgemeine Geschäftsbedingungen der IUNA AI Systems GmbH für KI-Vision-Systeme, Schweißnahtprüfung und zugehörige Dienstleistungen.",
}

export default function AGBPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_landing_page.jpg"
            alt="IUNA AI Allgemeine Geschäftsbedingungen"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Allgemeine Geschäftsbedingungen
          </h1>
          <div className="mt-4 h-1 w-32 bg-primary md:mt-6 md:w-48"></div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-gray-50 py-8">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-sm border">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Als PDF herunterladen</h2>
                  <p className="text-sm text-gray-500">Allgemeine Geschäftsbedingungen (AGB) - Stand 01/2025</p>
                </div>
              </div>
              <Button asChild>
                <a href="/documents/Allgemeine-Geschaeftsbedingungen-AGB_01_2025.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  PDF herunterladen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AGB Content */}
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <p className="text-sm text-gray-500 italic mb-8">Stand: 01/2025</p>

            <h2>§ 1 Geltungsbereich und Vertragsgegenstand</h2>
            <ol>
              <li>
                Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten für alle Geschäftsbeziehungen zwischen
                der IUNA AI Systems GmbH (nachfolgend „IUNA" oder „Auftragnehmer") und ihren Kunden (nachfolgend
                „Auftraggeber").
              </li>
              <li>
                Die AGB gelten ausschließlich für Unternehmen (§ 14 BGB), juristische Personen des öffentlichen Rechts
                oder öffentlich-rechtliche Sondervermögen.
              </li>
              <li>
                Vertragsgegenstand ist – je nach individuellem Angebot – die Lieferung von Hardware (z. B. Kameras,
                PLCs, Server), die Überlassung von Software zur Schweißnahtprüfung sowie zugehörige Dienstleistungen
                (Installation, Wartung, Support).
              </li>
              <li>
                Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers (Einkaufsbedingungen)
                werden nicht anerkannt, es sei denn, IUNA stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </li>
            </ol>

            <h2>§ 2 Angebot und Vertragsschluss</h2>
            <ol>
              <li>
                Die Angebote von IUNA sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich
                gekennzeichnet sind.
              </li>
              <li>
                Eine Bestellung des Auftraggebers gilt als verbindliches Vertragsangebot. Ein Vertrag kommt erst durch
                die schriftliche Auftragsbestätigung von IUNA oder durch die Lieferung der Ware zustande.
              </li>
            </ol>

            <h2>§ 3 Lieferung und Installation</h2>
            <ol>
              <li>Liefertermine sind nur verbindlich, wenn sie schriftlich als fix vereinbart wurden.</li>
              <li>
                <strong>Installation:</strong> Die Installation und Inbetriebnahme der Systeme vor Ort (beim
                Auftraggeber oder dessen Endkunden) ist nur dann Bestandteil des Vertrages, wenn dies ausdrücklich
                vereinbart wurde. Andernfalls schuldet IUNA lediglich die Lieferung der Komponenten sowie die
                Bereitstellung der Software.
              </li>
              <li>
                Ist ein Dritter (z. B. Systemintegrator) mit dem Einbau beauftragt, haftet IUNA nicht für Fehler, die
                auf unsachgemäßen Einbau oder falsche Verkabelung durch Dritte zurückzuführen sind.
              </li>
            </ol>

            <h2>§ 4 Abnahme (FAT und SAT)</h2>
            <p>
              Da es sich bei den Systemen um komplexe technische Anlagen handelt, erfolgt die Abnahme in Stufen, sofern
              im Angebot nichts anderes geregelt ist:
            </p>
            <ol>
              <li>
                <strong>Werklieferung:</strong> Bei reinen Hardware/Software-Lieferungen ohne Installation gilt die Ware
                mit Ablieferung als abgenommen, sofern der Auftraggeber nicht innerhalb von 7 Tagen wesentliche Mängel
                rügt.
              </li>
              <li>
                <strong>Werkleistung (mit Installation):</strong>
                <ul>
                  <li>
                    Sofern vereinbart, erfolgt zunächst ein Factory Acceptance Test (FAT) im Hause von IUNA oder
                    virtuell.
                  </li>
                  <li>Nach Installation erfolgt der Site Acceptance Test (SAT) beim Auftraggeber.</li>
                </ul>
              </li>
              <li>
                Das System gilt auch dann als abgenommen (konkludente Abnahme), wenn der Auftraggeber das System im
                operativen Betrieb (Produktion) einsetzt oder die Abnahme ohne Vorliegen eines wesentlichen Mangels
                verweigert.
              </li>
            </ol>

            <h2>§ 5 Preise und Zahlungsbedingungen</h2>
            <ol>
              <li>
                Alle Preise verstehen sich in Euro zuzüglich der gesetzlichen Mehrwertsteuer sowie Verpackungs- und
                Versandkosten.
              </li>
              <li>
                <strong>Zahlungsplan:</strong> Sofern im Angebot nicht anders vereinbart, gelten folgende Teilzahlungen
                als vereinbart:
                <ul>
                  <li>30 % der Auftragssumme bei Vertragsabschluss (nach Erhalt der Auftragsbestätigung).</li>
                  <li>
                    60 % nach erfolgreichem Factory Acceptance Test (FAT) oder – falls kein FAT vereinbart ist – bei
                    Meldung der Versandbereitschaft der Ware.
                  </li>
                  <li>
                    10 % nach erfolgreichem Site Acceptance Test (SAT) oder spätestens 30 Tage nach Lieferung, falls
                    sich der SAT aus Gründen verzögert, die IUNA nicht zu vertreten hat.
                  </li>
                </ul>
              </li>
              <li>Rechnungen sind innerhalb von 30 Tagen ab Rechnungsdatum ohne Abzug zur Zahlung fällig.</li>
              <li>
                <strong>Wartung & Support:</strong> Gebühren für das "Support & License Agreement" (SLA) werden, sofern
                nicht anders vereinbart, jährlich im Voraus berechnet.
              </li>
            </ol>

            <h2>§ 6 Eigentumsvorbehalt</h2>
            <ol>
              <li>
                IUNA behält sich das Eigentum an der gelieferten Hardware bis zur vollständigen Begleichung aller
                Forderungen aus dem jeweiligen Liefervertrag vor.
              </li>
              <li>
                Der Auftraggeber ist berechtigt, die Vorbehaltsware im ordentlichen Geschäftsgang weiterzuveräußern (z.
                B. als Integrator an Endkunden); er tritt IUNA jedoch bereits jetzt alle Forderungen ab, die ihm aus der
                Weiterveräußerung erwachsen.
              </li>
            </ol>

            <h2>§ 7 Nutzungsrechte an der Software (Lizenz)</h2>
            <ol>
              <li>
                <strong>Kaufsoftware:</strong> Mit vollständiger Zahlung erhält der Auftraggeber ein einfaches, nicht
                ausschließliches, zeitlich unbegrenztes Recht, die Software auf der im Vertrag definierten Hardware zu
                nutzen.
              </li>
              <li>
                <strong>Verbot der Bearbeitung:</strong> Der Auftraggeber darf die Software nicht verändern,
                zurückentwickeln (Reverse Engineering) oder dekompilieren, soweit dies nicht gesetzlich zwingend erlaubt
                ist.
              </li>
              <li>
                Die Software dient als Assistenzsystem zur Qualitätsprüfung. Die finale Entscheidung über die
                Qualitätssicherung und Freigabe der produzierten Teile obliegt weiterhin dem Auftraggeber. IUNA
                garantiert eine bestimmte Fehlerrate nur, wenn dies explizit im Lastenheft/Angebot als "Garantiewert"
                (z. B. False-Positive-Rate &lt; X%) schriftlich fixiert wurde.
              </li>
            </ol>

            <h2>§ 8 Datenrechte und KI-Training</h2>
            <ol>
              <li>
                Der Auftraggeber erkennt an, dass die Qualität der KI-Modelle von der Menge und Varianz der
                Trainingsdaten abhängt.
              </li>
              <li>
                <strong>Datennutzung:</strong> Der Auftraggeber räumt IUNA das zeitlich, räumlich und inhaltlich
                unbeschränkte, unwiderrufliche und kostenfreie Recht ein, die im Rahmen der Nutzung des Systems
                entstehenden Bilddaten (insbesondere Aufnahmen von Schweißnähten und Bauteilen) sowie Feedback-Daten
                (User-Labels) zu nutzen.
              </li>
              <li>
                <strong>Zweck:</strong> Dieses Nutzungsrecht dient der Verbesserung der KI-Algorithmen, dem Training
                neuer Modelle und der allgemeinen Weiterentwicklung der Produkte von IUNA. IUNA ist berechtigt, diese
                verbesserten Modelle auch anderen Kunden zur Verfügung zu stellen.
              </li>
              <li>
                IUNA stellt sicher, dass bei der Verwendung der Daten keine Rückschlüsse auf Geschäftsgeheimnisse des
                Auftraggebers (z. B. ganze Konstruktionspläne) möglich sind, sofern die Bilder lediglich Detailaufnahmen
                (z. B. Schweißnaht-Ausschnitte) darstellen.
              </li>
            </ol>

            <h2>§ 9 Wartung, Updates und Support</h2>
            <ol>
              <li>
                Bei Projekten mit einem Volumen von über 50.000 € ist der Abschluss eines Support & License Agreements
                (SLA) verpflichtend. Bei kleineren Projekten ist dies optional.
              </li>
              <li>
                Ohne gültiges SLA hat der Auftraggeber keinen Anspruch auf Software-Updates, neue KI-Modelle oder
                Support-Dienstleistungen.
              </li>
              <li>
                IUNA ist berechtigt, Updates einzuspielen, um die Sicherheit oder Funktionsfähigkeit der Software zu
                erhalten.
              </li>
            </ol>

            <h2>§ 10 Gewährleistung (Sachmängel)</h2>
            <ol>
              <li>Die Gewährleistungsfrist beträgt 12 Monate ab Gefahrübergang (Lieferung bzw. Abnahme).</li>
              <li>
                Bei Softwarefehlern muss der Fehler reproduzierbar sein. Der Auftraggeber hat IUNA bei der Fehleranalyse
                (z. B. durch Bereitstellung von Logs und Bildern) zu unterstützen.
              </li>
              <li>
                Keine Gewährleistung wird übernommen für Mängel, die durch ungeeignete oder unsachgemäße Verwendung,
                fehlerhafte Montage durch den Auftraggeber oder Dritte oder natürliche Abnutzung entstehen.
              </li>
            </ol>

            <h2>§ 11 Haftung</h2>
            <ol>
              <li>
                IUNA haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des
                Lebens, des Körpers oder der Gesundheit.
              </li>
              <li>
                <strong>Beschränkung bei leichter Fahrlässigkeit:</strong> Bei leichter Fahrlässigkeit haftet IUNA nur
                bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht). In diesem Fall ist die Haftung auf
                den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
              </li>
              <li>
                <strong>Haftungshöchstgrenzen:</strong> Die Haftung ist im Rahmen der bestehenden
                Betriebshaftpflichtversicherung wie folgt beschränkt:
                <ul>
                  <li>Für Sach- und Personenschäden pauschal auf 3.000.000,00 EUR je Schadensfall.</li>
                  <li>
                    Für Vermögensschäden (z. B. Produktionsausfall, IT-Fehler, fehlerhafte Sortierung) auf 500.000,00
                    EUR je Schadensfall.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Haftungsausschluss für KI-Entscheidungen:</strong> IUNA weist ausdrücklich darauf hin, dass
                KI-basierte Systeme (Machine Learning) probabilistisch arbeiten und keine 100%ige Fehlerfreiheit
                garantieren können. IUNA haftet nicht für Folgeschäden (z. B. Rückrufkosten, entgangener Gewinn), die
                dadurch entstehen, dass das System einen Defekt an einem Bauteil nicht erkannt hat (Schlupf) oder ein
                gutartiges Bauteil als defekt erkannt hat (Pseudoausschuss), sofern die Erkennungsrate dem Stand der
                Technik oder den spezifizierten Leistungsdaten entspricht.
              </li>
            </ol>

            <h2>§ 12 Geheimhaltung</h2>
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen Geschäfts- und
              Betriebsgeheimnisse der jeweils anderen Partei zeitlich unbegrenzt vertraulich zu behandeln und nicht an
              Dritte weiterzugeben. Dies gilt nicht für die unter § 8 geregelte Nutzung von anonymisierten
              Bilddaten/Rohdaten zu Trainingszwecken.
            </p>

            <h2>§ 13 Schlussbestimmungen</h2>
            <ol>
              <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).</li>
              <li>
                Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist der Sitz
                der IUNA AI Systems GmbH (Humboldtstr. 14, 74199 Untergruppenbach, Deutschland).
              </li>
              <li>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der
                übrigen Bestimmungen unberührt.
              </li>
            </ol>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-500">
                IUNA AI Systems GmbH
                <br />
                Humboldtstr. 14
                <br />
                74199 Untergruppenbach, Deutschland
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
