# Dokumentation for Landrup Dans - Termins prøve
Liva Kuhlmann, WU12 - Hovedforløb

<img src="./public/images/front-page.png" alt="Billede af forside">

## Sådan kommer du i gang
Api'et findes på https://github.com/rts-Liva/landrup-dans-api

`npm i`

`npm run dev`

Linket til live-side (Obs. api'et kører over en webservice, som er lidt tid om at vågne.)
https://landrup-dans-wine.vercel.app

## Valg af valgfri opgave
Jeg har lavet valgfri opgave A

Jeg har lavet valgfri opgave B

Jeg har lavet valgfri opgave C

## Tech-stack
### React
* React er et front-end bibliotek der giver mulighed for at opdele kode i komponenter og håndtere states på et let og overskuelig måde.
* React er meget anvendt, godt dokumenteret, understøttet og har stor efterspørgelse på udviklere.
* Jeg har valgt React da jeg synes arbejdsprocessen er letforståelig og meget intuitiv. Deres markup syntax --JSX-- og komponent opdeling er super nem at arbejde med, når man først har lært det.

**Hvorfor React?**
* Det korte svar er det var det vi lærte i skolen. Men vi har også lært andre mindende ting som Webpack og Wordpress.
* Jeg fortrækker React over de her 2 begrund af adskellige årsager. Lad os starte med Webpack.
* Da vi brugte Webpack var der meget man skulle gøre før man overhovedet kunne gå i gang. Jeg syntes ikke den bragte særlige brugbare ting frem. Hvad den havde jeg kunne lide, var bedre og nemmere i React.
* Wordpress har jeg det bedre med end Webpack. Wordpress var meget fin at arbejde med. Det var simpelt og nemt at sætte en side op. Men selvom der er muligheder for at skrive kode, savnede jeg stadig den del af webudvikling.
* React tilbyder mig mest at det jeg synes gør kodning sjovt og spændende, derfor vælger jeg React.

### Next.js
* Next.js er et front-end framework baseret på React.
* I Next.js er der bl.a. adgang til server-side komponenter, server-actions og mappe-baseret routing.
* Server-side komponenter og funktioner's sikkerhed er større da alt koden afvikles i serveren i stedet for klienten.
* Jeg har valgt at bruge Next.js fordi den kommer med de sidste dele der gør React så god at arbejde med. Med brug af Next.js kan jeg sætte mit projekt op endnu hurtigere og let gå i gang med at arbejde.
* Med route groups er det nemt at danne forskellige layouts og bare lægge siderne under.

**Hvorfor Next.js?**
* Igen, har vi ikke rigtig arbejde med andre front-end frameworks andet end Next.js
* På React's egen side, anbefalder de Next.js og Remix. For hvad jeg ved har Remix fokus på accessibility og fart. Begge bygger på React med forskelligheder.
* Hvad jeg ser flest anbefalde er smag og behag, vælg det der passer en bedst. For mig, er det Next.js.
* Next.js passer godt til mig og er nemt at få hjælp til via dokumentation eller community, derfor vælger jeg Next.js.

### Git
* Git er et versionsstyringsværktøj, som giver muligheden for lave branches og versioner af koden, så det er let at gå tilbage til tidligere versioner, hvis behovet for ændringer ankommer.
* Jeg har valgt at bruge Git sammen med Github.
* Jeg bruger Git/Github begrund af den's simpelhed og brugbarhed. Bare sæt det op en gang og så virker alt. Nu har jeg altid et sted min kode bliver gemt, hvis nu jeg skulle miste filerne.

**Hvorfor Git/Github?**
* I stedet for GitHub er der GitLab. Jeg har selv aldrig roddet med GitLab, men min forståelse er at hvad mange folk kan lide, er hvordan den er inbygget.
* Tilgengælg er den's user interface langsom. GitLab er ikke ligeså populær, så GitHub kan være nemmere at finde hjælp til, eller bare lettere forståelig.
* Jeg vælger GitHub sammen med Git da det er super nemt for mig at sætte et nyt repository op, og nemt finde rundt i mine branches eller repositories. GitHub er lettere forståelig i min mening.

### Zod
* Zod er et valideringsbibliotek hvor man kan lave schemas til at validere data fra simple strings, til komplekse objects.
* I dette projekt har jeg anvendt Zod til at validere bruger-input fra formularer.
* Jeg har valgt Zod fordi den er en stor hjælp i at validere data uden meget besvær. I stedet for en masse conditional statements med forvirrende regex osv. kan man hurtigt og simpelt validere med Zod og sende fejlbeskeder nemt tilbage til brugeren.

**Hvorfor Zod?**
* Alternativet til Zod for mig ville være da jeg stadig selv ville lave min validering med adskellige conditional statements, forvirrende regex og manuelle fejl beskeder.
* Zod virker effektivt til at dette, derfor vælger jeg Zod.

### RESTful Web-API
* Jeg bruger et REST (REpresentational State Transfer) API --hvilket er en undergruppe af Web API-- til at få adgang til Landrup Dans' data via et interface.

### SASS
* Sass er en udvidelse til CSS, som giver muligheden til at lave variabler, nesting, mixins og funktioner.
* Sass er stort udbredt.
* Jeg har valgt Sass for dens evne til at simpelt opdele CSS i moduler og dermed kan jeg genbruge kode flere steder.
* Jeg synes Sass' syntax er intuitiv og (om det er med vilje eller ej,) opfordrer til at bruge en navnekonvation såsom BEM, begrund af de udvidelser Sass medbringer såsom nesting.

**Hvorfor Sass?**
* I stedet for Sass, har jeg arbejdet med TailwindCSS.
* Min årsag til jeg har valgt Sass lægger meget i jeg fortrækker strukturen Sass medbringer.
* Jeg kan godt se hvorfor Tailwind bliver brugt i stedet, da man har adgang til hurtige shortcuts til often brugte stylings. Men for mig synes jeg strukturen fylder for meget vandret, det er sværere at forstå hvad der sker ved at kigge på det. Jeg kan ikke genbruge klasser fordi stylingen er klasser, så hvis noget styles ens, skal jeg kopiere alt hend, eller lave virkelig mange elementer til kompontenter.
* Sass' nesting struktur er præcis hvad jeg kan lide. Det er mere overskueligt, og jeg er mere effektiv med det. Derfor vælger jeg Sass.

### React-icons
* React-icons er et ikon-bibliotek, anvendt til React.
* React-icons er smart da den kun importere de ikoner der bliver brugt i projektet. Dvs. på production har du kun filer der lægger og fylder til de ikoner der er behov for.
* Jeg har valgt React-icons da den gør det simplere og nemmere for mig at tilføje ikoner.

**Hvorfor React-icons?**
* Inden jeg om lærte om React-icons, ville jeg manuelt finde svg'er på svgrepo og downloade dem ned.
* Med React-icons kan jeg nemt og hurtigt importere et bestemt ikon ind.
* Derfor vælger jeg React-icons i stedet for min gamle metode jeg brugte inden jeg kendte til det.

### React-spinners
* React-spinners er et loading-spinners-bibliotek, anvendt til React.
* React-spinners tilbyder færdiglavet loading animationer der er nemme at tilpasse efter brug.
* Jeg har valgt React-spinners da jeg nemt kan integrere loading animationer uden meget besvær, med brug af den.
* Dog er versionen stadig i alpha, så andre muligheder kunne overvejes.

**Hvorfor React-spinners?**
* Som sagt, har versionen endnu ikke ramt beta som ikke er anbefaldet at bruge. Men selvom det, synes jeg at React-spinners er et godt bibliotek.
* Der er stor variation af animationer, så man kan finde noget der passer en's side. De er nemme at tilpasse til specifikke behov.
* Inden React-spinners ville jeg altid bare have loading'en til at være tekst. At lave min egen loading spinner, var irritirende og besværlig. Derfor kan jeg godt lide React-spinners på trods af at den kun er i alpha.

## Kode eksempel
ActivityDetails komponent (components/cards/activity-details.jsx)
```jsx
function ActivityDetails({ id, user }) {
    const { data, error, loading } = useFetch(`activities/${id}`);

    const userIsParticipating = user?.activities.some(activity => activity?.id === data?.id);
    const userIsAvailable = !(user?.activities.some(activity => activity?.weekday === data?.weekday));
    const userTooYoung = user?.age < data?.minAge;
    const userTooOld = user?.age > data?.maxAge;

    return (
        <>
            {loading && <Loader />}
            {error && <p>Aktivitet kunne ikke findes</p>}
            {data && (
                <>
                    <div className="details-cover">
                        <Image
                            src={data.asset.url}
                            alt={`${data.name} billede`}
                            width={600}
                            height={600}
                            className="details-cover__image" />
                        {user?.id && user?.role === 'default' && (
                            <ActivityBtn
                                userIsParticipating={userIsParticipating}
                                userIsAvailable={userIsAvailable}
                                userTooYoung={userTooYoung}
                                userTooOld={userTooOld}
                                userId={user?.id}
                                activityId={data?.id} />
                        )}
                    </div>
                    ...
            )}
    )
}
```
ActivityBtn komponent (components/activity-btn.jsx)
```jsx
function ActivityBtn({ userIsParticipating, userIsAvailable, userTooYoung, userTooOld, userId, activityId }) {
    const [state, dispatch] = useReducer(reducer, {
        title: 'Tilmeld dig til denne aktivitet',
        disabled: false,
        text: 'Tilmeld',
        method: 'POST',
    });

    async function manageUserActivity() {
        await authFetch(`users/${userId}/activities/${activityId}`, `activity/${activityId}`, true, state?.method);
    };

    useEffect(() => {
        if (userIsParticipating) {
            dispatch({ type: 'setTitle', newTitle: 'Forlad denne aktivitet' });
            dispatch({ type: 'setText', newText: 'Forlad' });
            dispatch({ type: 'methodDelete' });
        }

        else if (!userIsAvailable) {
            dispatch({ type: 'setTitle', newTitle: 'Du er allerede tilmeldt noget andet denne dag' });
            dispatch({ type: 'isDisabled' });
        }

        else if (userTooYoung) {
            dispatch({ type: 'setTitle', newTitle: 'Du er ikke gammel nok til denne aktivitet' });
            dispatch({ type: 'isDisabled' });
        }
        ...

    }, [userIsParticipating]);

    return (
        <button
            type="button"
            onClick={manageUserActivity}
            title={state?.title}
            disabled={state?.disabled}
            className="details-cover__button"
        >{state?.text}</button>
    );
}
```
I ActivityDetails udnytter jeg en custom-hook der fetcher og fejl-håndtere data med minimum input fra mig.

Jeg har valgt af bruge Next.js' Image komponent i stedet for vanilla html's img tag, da den indebærer automatiske billede optimeringer, såsom lazy-loading.

Jeg har defineret en mængde variabler der bliver brugt i ActivityBtn til at håndtere de forskellige states knappen skal have.

I ActivityBtn udnytter jeg en useReducer React-hook til at komprimere mængden af states jeg ellers ville have haft.

Igen, udnytter jeg endnu en custom-hook til at fetch min data. Forskellen i denne er den bruger headers med authorization som en del af den's options, samt at den har mulighed for at være andet en kun en GET metode.

Jeg bruger en useEffect, som er en React-hook. React hooks er indbygget react funktioner. De fleste hooks har noget med state management at gøre. I min useEffect's dependency array har jeg tilføjet et parameter til at køre koden igen hvis en ændring er sket til dens værdi. Som standard, ville min useEffect kører efter initial mount.

I denne useEffect bruger jeg min reducer's dispatch til at angive nye værdier med brug af conditional statements.

Knappen vil dynamisk tilpasse sig til de forskellige funktioner og accessibility den skal, uden af rendere forskellige knapper til hvert job.

## Ændringer i design
### Drawer-menu
* Jeg har valgt at cirklen rundt om hvert ikon kun viser sig til den aktive side.
* Dette valgte jeg at gøre da det udlaverede design, ikke havde nogen måde at vide hvilken side man var inde på, ved at kigge i menuen.

### Login formular
* Jeg har tilføjet i bunden af login formularen, et link til signup siden.
* Dette gjorde jeg for at integrere valgfri opgave B ind i hjemmesiden.

## Skalering
* Med brug af route groups har jeg sat det op så det burde være nemt at tilføje nye sider med de forskellige layouts.
* Det burde også være simpelt at tilføje nye layouts der stadig indebærer de brugte komponenter (Footer eller Header)
* Jeg har opdelt kode i komponenter, så det er nemt at genbruge hvad der allerede er lavet.
* Jeg har overholdt en bestemt struktur (fil-opsætning/mappe-struktur, navnekonvation osv.) så der hurtigt kan findes rundt, hvis en anden skulle tage over.
* Jeg har lavet funktioner der kan genbruges til at hurtigt få lavet noget nyt (utils & custom-hooks).
* De genbrugelige funktioner/utils/hooks/komponenter er fleksible så de kan bruges til mere end kun specifikke formål.
* Der er inbygget fejlbeskeder i funktioner såsom fetches og actions, så hvis noget skulle gå galdt er et nemt at finde ud af hvad.
* Jeg har været kort --dog beskrivende-- med navne, så der hurtigt kan forstås hvad noget gør (variable navne, komponent navne osv.).