# NAV kodeoppgave

Dette prosjektet består av en side, som viser de 100 siste jobbene som er lagt ut i NAV sitt api.

Prosjektet startes med `Yarn start` og testene kjøres med `Yarn test`

## Teknologier

Prosjektet er bygget i react, med typescript, og er startet med create react app for et godt utgangspunkt. Axios er tatt i bruk for å hente data fra apiet.

## Valg underveis

Koden er bygd opp av gjenbrukbare komponenter for å enkelt holde helheten i noe som kunne vært et større prosjekt. Jobbene er for eksempel delt opp i en "jobs" komponent som igjen inneholder en "job" komponent som viser den respektive jobben. "Jobs" komponenten er enkel og bare looper gjennom alle jobbene, for så å kaste det videre til "job" komponentene som faktisk viser jobben. Jeg har skrevet interfaces for dataen fra apiet, for å holde den typesikker, og mer spesifikke interfaces for props hvor det har vært nødvendig.

Når det kommer til tester har jeg skrevet en unit test for funksjonen jeg har brukt gjennom koden, og en integrasjons test for "job"komponenten. Jeg har spesifikt ikke skrevet for dem andre statiske komponentene som ikke gjør annet enn å rendre html.

## Veien videre

I et prosjekt som dette ville jeg videre ha skrevet en filterfunksjon slik at brukerene kan filtrere på både sted, kategorier og ansettelsesprosent.

## Lighthouse

Ved å kjøre lighthouse i browseren oppnår prosjektet en score på performance: 95, accessibility: 100, best practices: 100, og SEO: 100
