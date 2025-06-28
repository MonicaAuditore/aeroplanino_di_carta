<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Hero -->
    <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="hero-content">
        <h1>L'Aeroplanino di Carta e i Sei Venti</h1>
        <p>
          Questa è la storia di un aereoplanino di carta che ha cambiato tutto.
          Oggi, dopo anni di voli e atterraggi, eccomi qui a condividere con te
          i momenti che mi hanno resa la persona che sono.
        </p>
        <p>
          Ti invito a seguire il mio volo attraverso i valori che mi guidano.
          Ogni tappa racconta un pezzo di me, ogni storia è un frammento di uno
          specchio che ho raccolto per costruire la mia verità.
        </p>
        <p>Benvenuto nel mio viaggio...</p>
        <button @click="scrollToSection">Vola con me</button>
      </div>
    </section>

    <!-- Wrapper principale con sfondo unico -->
    <div class="main-content" :style="{ backgroundImage: `url(${mainBg})` }">
      <!-- Prima sezione -->
      <section id="sezione1" class="section-image-text">
        <div>
          <p class="number">01</p>
          <h2>Ambition</h2>
          <p>
            Era un martedì come tanti altri quando arrivò quel cliente in
            ufficio. Aveva un'idea apparentemente semplice: voleva un
            aereoplanino di carta che attraversasse il suo sito mentre gli
            utenti facevano scroll. "Tipo quelli che facevamo da bambini," mi
            disse, "ma che voli davvero nella pagina."
          </p>
          <p>
            Rimasi in silenzio per un momento. Dentro di me, quella richiesta
            aveva acceso qualcosa. Sapevo esattamente cosa intendeva. Potevo
            visualizzarlo perfettamente: quell'aereoplanino leggero che planava
            elegante attraverso il contenuto, portando con sé un pizzico di
            nostalgia e meraviglia.
          </p>
          <p>
            Ma poi arrivò il momento della verità: "Mi dispiace, non siamo
            sviluppatori e con gli strumenti che utilizziamo qui non possiamo
            realizzarlo." Quelle parole mi pesarono dentro perché io volevo
            essere quella persona che poteva dire di sì. Volevo essere quella
            che poteva trasformare i sogni digitali in realtà.
          </p>
          <p>
            Quella sera, seduta davanti al computer, presi una decisione che
            covavo da mesi: decisi che dovevo salire su quell'aereoplanino di
            carta e partire verso l'ignoto. Boolean, codice, una nuova vita. Il
            cuore mi batteva forte tra emozione, speranza e quella dolce paura
            dell'avventura che stava per iniziare...
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 1" />
      </section>

      <!-- Seconda sezione -->
      <section id="sezione2" class="section-image-text reverse">
        <div>
          <p class="number">02</p>
          <h2>Excellence</h2>
          <p>
            L'eccellenza è sempre stata la mia bussola, anche quando non sapevo
            ancora come chiamarla. Al liceo, le mie poesie riempivano quaderni
            su quaderni. Ma non mi bastava. Volevo vederle diventare un libro
            vero. Non fotocopie spillate o file digitali - un libro stampato,
            con la copertina, le pagine che profumavano di inchiostro fresco e
            immagini realizzate da me. Perché le cose che ami davvero meritano
            di essere fatte per bene, fino in fondo.
          </p>
          <p>
            E così anche quando la passione per il canto ha iniziato a bruciare
            dentro di me, ho sentito di nuovo quella stessa voce: se lo fai,
            fallo bene. Tutti mi consigliavano accademie più semplici, percorsi
            "meno impegnativi". Ma io sapevo che volevo il meglio che potessi
            dare a me stessa. Così mi sono presentata al conservatorio. Ore di
            studio, esercizi, prove, eliminazioni. La barra era alta, altissima.
            Ma ogni volta che la voce si faceva più pulita, più sicura, più mia,
            capivo che non avrei mai potuto accontentarmi di meno. Il giorno
            della mia laurea in canto lirico, con quel diploma tra le mani, ho
            pensato: ecco cosa significa non scendere a compromessi con i propri
            sogni.
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 2" />
      </section>

      <!-- Terza sezione -->
      <section id="sezione3" class="section-image-text">
        <div>
          <p class="number">03</p>
          <h2>Caring</h2>
          <p>
            La mia prima insegnante di canto, mi diede un buon esempio. Quando
            sono diventata insegnante a mia volta, quelle parole sono diventate
            il mio mantra. Ogni allievo che entrava nella mia aula portava con
            sé non solo la voglia di cantare, ma anche le sue giornate, le sue
            preoccupazioni, i suoi sogni. C'era chi arrivava teso dal lavoro e
            aveva bisogno di dieci minuti per parlare prima di iniziare. Chi era
            timido e serviva tempo per sentirsi al sicuro.
          </p>
          <p>
            Per ognuno inventavo un metodo diverso. Non esistevano due persone
            uguali, quindi non potevano esistere due lezioni uguali. Se qualcuno
            aveva bisogno di sfogarsi, lo ascoltavo. Se qualcuno aveva paura di
            sbagliare, lo rassicuravo. Perché prima della tecnica, prima degli
            esercizi, prima di tutto, c'era la persona.
          </p>
          <p>
            Perché prima della tecnica, prima degli esercizi, prima di tutto,
            c'era la persona.
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 3" />
      </section>

      <!-- Quarta sezione -->
      <section id="sezione4" class="section-image-text reverse">
        <div>
          <p class="number">04</p>
          <h2>Growth</h2>
          <p>
            Sei mesi dopo la fine di Boolean. Non era solo il codice che avevo
            imparato. Era il coraggio di dire: "Ora voglio di più." Piacenza,
            per quanto amata, era diventata piccola per i miei sogni. Volevo
            progetti che accendessero la mia creatività, un'azienda in
            movimento, aria nuova da respirare. Quando arrivò l'offerta da Roma,
            il cuore iniziò a battere forte. Era esattamente quello che avevo
            visualizzato. Non la scelta più comoda, non quella più vicina. Ma
            quella giusta per crescere.
          </p>
          <p>
            Parallelamente, la stessa fame di crescita mi spingeva anche nel
            canto. Londra per perfezionare la tecnica, insegnanti diversi in
            tutta Italia, ognuno con il suo pezzo di verità da offrire. C'è una
            frase che mi ha sempre affascinata: "La verità è un grande specchio
            che cadendo si ruppe in molti pezzi. Ognuno ne prese uno e credette
            di avere l'unica verità." Il nostro compito è cercare quei
            frammenti, raccoglierli da ogni persona che incontriamo, da ogni
            esperienza che viviamo. Solo così lo specchio torna intero. Solo
            così cresciamo davvero.
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 4" />
      </section>

      <!-- Quinta sezione -->
      <section id="sezione5" class="section-image-text">
        <div>
          <p class="number">05</p>
          <h2>Courage</h2>
          <p>
            L'azienda mi stava facendo crescere come volevo. E quando mi
            assegnarono quel progetto per clienti importanti, sentii
            l'adrenalina pura. Non era solo codice - serviva ideazione, UX, UI.
            Tutto quello che mi aveva sempre affascinata anche prima di Boolean,
            ma che non avevo ancora osato esplorare davvero perchè non era
            ancora il momento. Mi buttai a capofitto. Ore di ricerca, schizzi,
            wireframe, prototipi. Quando finalmente presentai il lavoro, i
            clienti erano entusiasti. Ma la cosa più importante era quello che
            stavo scoprendo dentro di me: era lì che potevo dare il massimo.
          </p>
          <p>
            Improvvisamente tutto divenne chiaro. Le animazioni magiche che
            vedevo nella mia mente, le interfacce che catturavano l'attenzione
            guidando l'utente, quel modo di parlare semplice e chiaro che
            trasforma un prodotto digitale in un'esperienza bella da vivere.
            Ecco quando arrivò il momento del coraggio vero. Roma mi stava dando
            sicurezza, stipendio, crescita. Ma io sentivo che dovevo fare un
            altro salto nel vuoto. Dovevo tornare a studiare, specializzarmi,
            diventare quella che sa creare esperienze che emozionano. Così
            salutai Roma e salii di nuovo sul mio aereoplanino di carta. Perché
            il viaggio più bello era appena iniziato.
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 5" />
      </section>

      <!-- Sesta sezione -->
      <section id="sezione6" class="section-image-text reverse">
        <div>
          <p class="number">06</p>
          <h2>Proactivity</h2>
          <p>
            Quando facevo la fotografa, non mi limitavo mai a "scattare belle
            foto". Ogni cliente portava con sé una storia, un sogno, un
            messaggio che voleva far arrivare al mondo. E io sentivo che il mio
            lavoro era diventare il ponte tra la sua visione e la realtà.
            Ricordo una cliente in particolare: scriveva canzoni e voleva delle
            foto che raccontassero i suoi testi. Non bastava uno studio neutro o
            una location qualsiasi. Dovevo entrare nella sua musica, nelle sue
            parole, nella sua anima.
          </p>
          <p>
            Passai ore ad ascoltare le sue canzoni, a capire le emozioni che
            voleva trasmettere. Poi trovai il luogo perfetto - un posto che
            parlava la stessa lingua poetica dei suoi testi. Creai un'atmosfera
            dove lei potesse davvero essere se stessa, dove ogni scatto
            catturasse non solo la sua immagine, ma la sua essenza.
          </p>
          <p>
            Quando vide le foto, i suoi occhi si illuminarono. "Hai capito
            esattamente quello che sentivo," mi disse. E quella fu la mia gioia
            più grande. Perché essere proattivi non significa solo anticipare i
            bisogni del cliente ma anche immergersi nel suo mondo.
          </p>
        </div>
        <img src="https://via.placeholder.com/400x250" alt="Immagine 6" />
      </section>

      <!-- Sezione contatti -->
      <section id="contatti" class="contact-section">
        <img
          src="https://via.placeholder.com/150"
          alt="Immagine frammento di specchio"
          class="contact-image"
        />
        <h2>Da Quel Martedì a Oggi...</h2>
        <p class="contact-description">
          E ora eccomi qui. Quell'aereoplanino di carta che non sapevo creare
          quel martedì di tanto tempo fa? Ora vola leggero attraverso questo
          sito, portando con sé ogni storia, ogni valore, ogni pezzo di me che
          ho raccolto lungo il viaggio. Il bello dei voli è che non finiscono
          mai davvero. Si trasformano, cambiano rotta, scoprono nuovi cieli. E
          io sono pronta per il prossimo decollo.
        </p>

        <div class="contact-box">
          <p class="contact-box-intro">
            Se anche tu credi nella magia dei sogni che prendono il volo,
            facciamo insieme il prossimo viaggio.
          </p>

          <form @submit.prevent="submitForm">
            <input
              type="text"
              v-model="name"
              placeholder="Scrivi qui il tuo nome"
              required
            />
            <input
              type="email"
              v-model="email"
              placeholder="Scrivi qui la tua email"
              required
            />
            <textarea
              v-model="message"
              placeholder="Scrivi qui il tuo messaggio"
              required
            ></textarea>
            <button type="submit">Verso nuovi cieli...</button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import { ref } from "vue";
import heroImage from "@/assets/hero-bg.png";
import mainBg from "@/assets/main-bg.png";

const name = ref("");
const email = ref("");
const message = ref("");

function submitForm() {
  alert(
    `Grazie, ${name.value}! Ti risponderemo presto all'indirizzo ${email.value}.`
  );
  name.value = "";
  email.value = "";
  message.value = "";
}

function scrollToSection() {
  const element = document.getElementById("sezione1");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
/* Hero section */
.hero {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 2rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  text-align: left;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
}

.hero button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
}

.hero button:hover {
  background-color: #369c6b;
}

.main-content {
  background-image: url("https://via.placeholder.com/1200x800"); /* metti qui la tua immagine */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 1rem; /* aggiusta il padding se vuoi */
  /* Se vuoi un overlay scuro trasparente: */
  position: relative;
  z-index: 0;
}

.main-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* overlay scuro per contrasto testo */
  z-index: -1;
}

/* Sezioni con immagine e testo*/
.section-image-text.reverse {
  flex-direction: row-reverse;
}

.section-image-text {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.section-image-text img {
  width: 400px;
  max-width: 100%;
  border-radius: 8px;
}
.section-image-text div {
  flex: 1;
}
.section-image-text h2 {
  margin-bottom: 0.5rem;
}
.section-image-text p {
  font-size: 1.1rem;
  line-height: 1.5;
}

/* Sezione contatti */
.contact-section {
  text-align: center;
  padding: 3rem 1rem;
}

.contact-image {
  margin: 0 auto 1.5rem;
  display: block;
  border-radius: 50%;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.contact-box {
  background: #f0f0f0;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.contact-box-intro {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.contact-box form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-box label {
  font-weight: 600;
  display: flex;
  flex-direction: column;
}

.contact-box input,
.contact-box textarea {
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
}

.contact-box button {
  background-color: #42b983;
  color: white;
  padding: 0.8rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
}

.contact-box button:hover {
  background-color: #369c6b;
}

/* Responsive */
@media (max-width: 768px) {
  .section-image-text,
  .section-image-text.reverse {
    flex-direction: column;
  }
  .section-image-text img {
    width: 100%;
  }
}
</style>
