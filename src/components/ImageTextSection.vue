<template>
  <div>
    <section
      v-for="section in sections"
      :key="section.id"
      :id="section.id"
      class="section-image-text"
      :class="{ reverse: section.reverse }"
    >
      <div>
        <span class="number">{{ section.number }}</span>
        <h2>{{ section.title }}</h2>
        <p v-for="(paragraph, idx) in section.paragraphs" :key="idx">
          {{ paragraph }}
        </p>
      </div>
      <img :src="section.imgSrc" :alt="section.imgAlt" />
    </section>
  </div>
</template>

<script setup>
const sections = [
  {
    id: "sezione1",
    number: "01",
    title: "Ambition",
    paragraphs: [
      `Era un martedì come tanti altri quando arrivò quel cliente in ufficio. Aveva un'idea apparentemente semplice: voleva un aereoplanino di carta che attraversasse il suo sito mentre gli utenti facevano scroll. "Tipo quelli che facevamo da bambini," mi disse, "ma che voli davvero nella pagina."`,
      `Rimasi in silenzio per un momento. Dentro di me, quella richiesta aveva acceso qualcosa. Sapevo esattamente cosa intendeva. Potevo visualizzarlo perfettamente: quell'aereoplanino leggero che planava elegante attraverso il contenuto, portando con sé un pizzico di nostalgia e meraviglia.`,
      `Ma poi arrivò il momento della verità: "Mi dispiace, non siamo sviluppatori e con gli strumenti che utilizziamo qui non possiamo realizzarlo." Quelle parole mi pesarono dentro perché io volevo essere quella persona che poteva dire di sì. Volevo essere quella che poteva trasformare i sogni digitali in realtà.`,
      `Quella sera, seduta davanti al computer, presi una decisione che covavo da mesi: decisi che dovevo salire su quell'aereoplanino di carta e partire verso l'ignoto. Boolean, codice, una nuova vita. Il cuore mi batteva forte tra emozione, speranza e quella dolce paura dell'avventura che stava per iniziare...`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 1",
    reverse: false,
  },
  {
    id: "sezione2",
    number: "02",
    title: "Excellence",
    paragraphs: [
      `L'eccellenza è sempre stata la mia bussola, anche quando non sapevo ancora come chiamarla. Al liceo, le mie poesie riempivano quaderni su quaderni. Ma non mi bastava. Volevo vederle diventare un libro vero. Non fotocopie spillate o file digitali - un libro stampato, con la copertina, le pagine che profumavano di inchiostro fresco e immagini realizzate da me. Perché le cose che ami davvero meritano di essere fatte per bene, fino in fondo.`,
      `E così anche quando la passione per il canto ha iniziato a bruciare dentro di me, ho sentito di nuovo quella stessa voce: se lo fai, fallo bene. Tutti mi consigliavano accademie più semplici, percorsi "meno impegnativi". Ma io sapevo che volevo il meglio che potessi dare a me stessa. Così mi sono presentata al conservatorio. Ore di studio, esercizi, prove, eliminazioni. La barra era alta, altissima. Ma ogni volta che la voce si faceva più pulita, più sicura, più mia, capivo che non avrei mai potuto accontentarmi di meno. Il giorno della mia laurea in canto lirico, con quel diploma tra le mani, ho pensato: ecco cosa significa non scendere a compromessi con i propri sogni.`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 2",
    reverse: true,
  },
  {
    id: "sezione3",
    number: "03",
    title: "Caring",
    paragraphs: [
      `La mia prima insegnante di canto, mi diede un buon esempio. Quando sono diventata insegnante a mia volta, quelle parole sono diventate il mio mantra. Ogni allievo che entrava nella mia aula portava con sé non solo la voglia di cantare, ma anche le sue giornate, le sue preoccupazioni, i suoi sogni. C'era chi arrivava teso dal lavoro e aveva bisogno di dieci minuti per parlare prima di iniziare. Chi era timido e serviva tempo per sentirsi al sicuro.`,
      `Per ognuno inventavo un metodo diverso. Non esistevano due persone uguali, quindi non potevano esistere due lezioni uguali. Se qualcuno aveva bisogno di sfogarsi, lo ascoltavo. Se qualcuno aveva paura di sbagliare, lo rassicuravo. Perché prima della tecnica, prima degli esercizi, prima di tutto, c'era la persona.`,
      `Perché prima della tecnica, prima degli esercizi, prima di tutto, c'era la persona.`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 3",
    reverse: false,
  },
  {
    id: "sezione4",
    number: "04",
    title: "Growth",
    paragraphs: [
      `Sei mesi dopo la fine di Boolean. Non era solo il codice che avevo imparato. Era il coraggio di dire: "Ora voglio di più." Piacenza, per quanto amata, era diventata piccola per i miei sogni. Volevo progetti che accendessero la mia creatività, un'azienda in movimento, aria nuova da respirare. Quando arrivò l'offerta da Roma, il cuore iniziò a battere forte. Era esattamente quello che avevo visualizzato. Non la scelta più comoda, non quella più vicina. Ma quella giusta per crescere.`,
      `Parallelamente, la stessa fame di crescita mi spingeva anche nel canto. Londra per perfezionare la tecnica, insegnanti diversi in tutta Italia, ognuno con il suo pezzo di verità da offrire. C'è una frase che mi ha sempre affascinata: "La verità è un grande specchio che cadendo si ruppe in molti pezzi. Ognuno ne prese uno e credette di avere l'unica verità." Il nostro compito è cercare quei frammenti, raccoglierli da ogni persona che incontriamo, da ogni esperienza che viviamo. Solo così lo specchio torna intero. Solo così cresciamo davvero.`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 4",
    reverse: true,
  },
  {
    id: "sezione5",
    number: "05",
    title: "Courage",
    paragraphs: [
      `L'azienda mi stava facendo crescere come volevo. E quando mi assegnarono quel progetto per clienti importanti, sentii l'adrenalina pura. Non era solo codice - serviva ideazione, UX, UI. Tutto quello che mi aveva sempre affascinata anche prima di Boolean, ma che non avevo ancora osato esplorare davvero perchè non era ancora il momento. Mi buttai a capofitto. Ore di ricerca, schizzi, wireframe, prototipi. Quando finalmente presentai il lavoro, i clienti erano entusiasti. Ma la cosa più importante era quello che stavo scoprendo dentro di me: era lì che potevo dare il massimo.`,
      `Improvvisamente tutto divenne chiaro. Le animazioni magiche che vedevo nella mia mente, le interfacce che catturavano l'attenzione guidando l'utente, quel modo di parlare semplice e chiaro che trasforma un prodotto digitale in un'esperienza bella da vivere. Ecco quando arrivò il momento del coraggio vero. Roma mi stava dando sicurezza, stipendio, crescita. Ma io sentivo che dovevo fare un altro salto nel vuoto. Dovevo tornare a studiare, specializzarmi, diventare quella che sa creare esperienze che emozionano. Così salutai Roma e salii di nuovo sul mio aereoplanino di carta. Perché il viaggio più bello era appena iniziato.`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 5",
    reverse: false,
  },
  {
    id: "sezione6",
    number: "06",
    title: "Proactivity",
    paragraphs: [
      `Quando facevo la fotografa, non mi limitavo mai a "scattare belle foto". Ogni cliente portava con sé una storia, un sogno, un messaggio che voleva far arrivare al mondo. E io sentivo che il mio lavoro era diventare il ponte tra la sua visione e la realtà. Ricordo una cliente in particolare: scriveva canzoni e voleva delle foto che raccontassero i suoi testi. Non bastava uno studio neutro o una location qualsiasi. Dovevo entrare nella sua musica, nelle sue parole, nella sua anima.`,
      `Passai ore ad ascoltare le sue canzoni, a capire le emozioni che voleva trasmettere. Poi trovai il luogo perfetto - un posto che parlava la stessa lingua poetica dei suoi testi. Creai un'atmosfera dove lei potesse davvero essere se stessa, dove ogni scatto catturasse non solo la sua immagine, ma la sua essenza.`,
      `Quando vide le foto, i suoi occhi si illuminarono. "Hai capito esattamente quello che sentivo," mi disse. E quella fu la mia gioia più grande. Perché essere proattivi non significa solo anticipare i bisogni del cliente ma anche immergersi nel suo mondo.`,
    ],
    imgSrc: "https://via.placeholder.com/400x250",
    imgAlt: "Immagine 6",
    reverse: true,
  },
];
</script>

<style scoped>
.section-image-text.reverse {
  flex-direction: row-reverse;
}

.section-image-text {
  padding-top: 5rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 0;
  flex-wrap: wrap;
}

.section-image-text div,
.section-image-text img {
  flex: 1 1 50%;
  max-width: 50%;
}

.section-image-text img {
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
  padding-bottom: 1rem;
}

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
