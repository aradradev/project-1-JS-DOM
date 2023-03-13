let citation = document.querySelector('.quote');
let btn = document.querySelector('#btn')
let auteur = document.querySelector('.container-author')
let result = document.querySelector('#result')
let btnSolution = document.querySelector('#btn-solution')

const quotes = [{
    quote: `"Le bonheur n'est pas une destination à atteindre mais une façon de voyager."`,
    author: "- Margaret Lee Runbeck",
    result: `
    Le sujet "Le bonheur n'est pas une destination à atteindre mais une façon de voyager" invite à réfléchir sur la nature du bonheur et sa relation avec le voyage.

    D'une part, l'expression "destination à atteindre" suggère que le bonheur serait un but, un objectif à atteindre, comme une ligne d'arrivée après un parcours. Cette conception du bonheur est souvent associée à une quête de satisfaction, de plaisir ou de réussite, qui peut être source de frustration et de déception si l'on ne parvient pas à atteindre cette destination.

    D'autre part, l'expression "façon de voyager" implique que le bonheur ne serait pas tant une destination à atteindre qu'un mode de vie, une attitude à adopter dans la vie quotidienne. Cette conception du bonheur met l'accent sur la qualité de l'expérience plutôt que sur la quantité de satisfactions. Elle invite à apprécier le chemin parcouru plutôt que la destination finale.

    Ainsi, selon cette conception, le bonheur serait moins une finalité qu'un processus, un état d'esprit qui nous accompagne tout au long de notre vie. Cette vision du bonheur invite à cultiver des valeurs telles que la gratitude, la bienveillance, l'empathie, la curiosité, l'ouverture d'esprit, qui permettent de savourer les moments présents et de s'épanouir dans ses relations avec les autres.

    En définitive, le bonheur n'est pas quelque chose que l'on peut atteindre et posséder, mais plutôt un état d'esprit que l'on peut cultiver et entretenir tout au long de sa vie, comme une façon de voyager à travers les expériences et les rencontres que l'on fait sur son chemin.
    `
}, {
    quote: `"La vie n'a de sens que celui qu'on lui donne."`,
    author: "- Paulo Coelho",
    result: `
    Introduction

La question de la signification de la vie a toujours été un sujet de débat philosophique. Certains croient que la vie a un sens intrinsèque, tandis que d'autres estiment que la vie n'a de sens que celui qu'on lui donne. Dans cette dissertation, nous examinerons cette dernière affirmation, "La vie n'a de sens que celui qu'on lui donne", et nous allons tenter de montrer comment cela peut s'appliquer dans le contexte de la Guinée.

I. Le sens de la vie est subjectif

Le sens de la vie est subjectif et varie d'une personne à l'autre. Ce que quelqu'un considère comme important ou significatif peut ne pas l'être pour une autre personne. En d'autres termes, la signification de la vie dépend des valeurs, des croyances, des expériences et des objectifs personnels de chaque individu.

II. Le sens de la vie est influencé par l'environnement social

Le sens de la vie est également influencé par l'environnement social dans lequel une personne vit. Dans le cas de la Guinée, le contexte social peut influencer la façon dont les individus perçoivent la signification de leur vie. Par exemple, la culture guinéenne valorise la famille, la communauté et la religion, ce qui peut amener les gens à donner une grande importance à ces aspects de leur vie.

III. La vie a un sens quand on lui donne un but

Bien que le sens de la vie soit subjectif, cela ne signifie pas que la vie n'a pas de sens du tout. En réalité, la vie a un sens quand on lui donne un but ou une direction. Cela peut être quelque chose de personnel, comme poursuivre une passion ou un rêve, ou quelque chose de plus large, comme contribuer à une cause ou une communauté.

IV. La vie peut avoir un sens différent à différents moments de la vie

Le sens de la vie peut également changer à différents moments de la vie. Les priorités, les valeurs et les buts des gens peuvent évoluer avec le temps et les expériences. Ce qui était important à un moment donné peut ne plus l'être plus tard, et cela est tout à fait normal. Par conséquent, le sens de la vie peut être perçu comme une quête continue de trouver ce qui est important à chaque étape de la vie.
Conclusion:
En conclusion, la question du sens de la vie est complexe et multidimensionnelle. Bien qu'il y ait des perspectives différentes sur le sens de la vie, il est difficile de déterminer si la vie a un sens objectif ou si elle dépend de la façon dont chacun d'entre nous la perçoit. Cependant, la plupart des philosophes ont soutenu que la vie n'a de sens que celui qu'on lui donne. En fin de compte, il revient à chacun de nous de donner un sens à sa vie, en fonction de ses propres croyances, valeurs et aspirations.    
    `
}, {
    quote: `"La vérité est en marche et rien ne l'arrêtera."`,
    author: "- Émile Zola",
    result: `
    Introduction :

La quête de la vérité a été une préoccupation majeure de l'humanité depuis l'aube de la civilisation. Cependant, trouver la vérité n'est pas toujours facile, car les opinions et les idées sont souvent conflictuelles et subjectives. Néanmoins, certains pensent que la vérité est en marche et rien ne peut l'arrêter. Dans cette dissertation, nous allons examiner cette affirmation en explorant les différentes perspectives sur la vérité, en analysant comment la vérité peut être mise en marche et en discutant de la question de savoir si la vérité peut être arrêtée.

I- Les différentes perspectives sur la vérité

A- La perspective philosophique
B- La perspective scientifique
C- La perspective religieuse

II- Comment la vérité est-elle mise en marche ?

A- La quête de la vérité
B- Les moyens de parvenir à la vérité
C- Les obstacles à la découverte de la vérité

III- La vérité peut-elle être arrêtée ?

A- Les raisons pour lesquelles la vérité ne peut pas être arrêtée
B- Les limites à la recherche de la vérité
C- Les conséquences de l'arrêt de la vérité

Conclusion :

En conclusion, la quête de la vérité est une entreprise noble qui peut amener des bénéfices considérables à l'humanité. Bien que la recherche de la vérité puisse être difficile, il est important de continuer à la poursuivre, car la vérité est en marche et rien ne peut l'arrêter. Cependant, il convient de noter que la vérité peut être complexe et nuancée, et qu'il est important de considérer différents points de vue pour obtenir une vision plus complète de la vérité. En fin de compte, nous devons être ouverts à l'idée que nos croyances et nos opinions peuvent être remises en question par la vérité, et que nous devons être prêts à accepter la vérité, quelle qu'elle soit, afin de progresser dans notre quête de la connaissance et de la compréhension.
    `
}, {
    quote: `"Le désir de savoir est naturel à l'homme ; l'ignorance, l'erreur, la vérité, sont des éléments de sa destinée."`,
    author: " - Victor Cousin",
    result: `
    Introduction :

Le désir de savoir a été un trait caractéristique de l'humanité depuis l'aube de la civilisation. Cependant, trouver la vérité n'est pas toujours facile, car l'ignorance et l'erreur peuvent souvent obscurcir notre compréhension. Néanmoins, certains pensent que le désir de savoir est un élément naturel de l'homme, et que l'ignorance, l'erreur et la vérité sont des éléments inévitables de sa destinée. Dans cette dissertation, nous allons examiner cette affirmation en explorant les différentes perspectives sur le désir de savoir, en analysant les causes de l'ignorance et de l'erreur, et en discutant de la question de savoir si la vérité peut être atteinte.

I- Le désir de savoir est-il naturel à l'homme ?

A- La nature humaine et le désir de savoir
B- Les bienfaits du désir de savoir
C- Les limites du désir de savoir

II- Les causes de l'ignorance et de l'erreur

A- Les limites de notre compréhension
B- Les erreurs de raisonnement
C- Les préjugés et les croyances erronées

III- La vérité est-elle atteignable ?

A- La quête de la vérité
B- Les obstacles à la découverte de la vérité
C- Les implications de l'atteinte de la vérité

Conclusion :

En conclusion, le désir de savoir est un trait naturel de l'humanité qui peut nous aider à mieux comprendre le monde qui nous entoure. Cependant, l'ignorance et l'erreur sont des éléments inévitables de notre destinée, car notre compréhension est souvent limitée par nos préjugés, nos croyances et nos erreurs de raisonnement. Néanmoins, la vérité est atteignable, même si elle peut être difficile à trouver. En fin de compte, il est important de continuer à chercher la vérité, même si cela peut impliquer de remettre en question nos croyances et nos opinions. En faisant cela, nous pouvons progresser dans notre quête de la connaissance et de la compréhension, et ainsi atteindre une meilleure compréhension de nous-mêmes et du monde qui nous entoure.
    `
},
{
    quote: `"L'art est le plus court chemin de l'homme à l'homme."`,
    author: "- André Malraux",
    result: `
    La citation "L'art est le plus court chemin de l'homme à l'homme" de André Malraux soulève l'idée que l'art est un moyen privilégié pour les êtres humains de se connecter entre eux. Cette idée peut être examinée sous différents angles :

L'art comme moyen d'expression : L'art permet à l'homme d'exprimer des émotions, des sentiments et des idées de manière créative et esthétique. À travers l'art, les individus peuvent partager leur vision du monde avec les autres, susciter des émotions chez les spectateurs et ainsi créer une connexion entre eux.

L'art comme moyen de communication : L'art transcende les barrières linguistiques et culturelles et peut être compris par des personnes de toutes les nationalités et de tous les horizons. Les œuvres d'art peuvent raconter des histoires, des mythes ou des légendes qui peuvent être comprises et appréciées par des personnes de différentes cultures et de différentes époques. De cette manière, l'art crée un lien entre les individus qui partagent une expérience commune.

L'art comme moyen de réflexion : L'art peut également être utilisé comme un moyen de réflexion sur des problèmes sociaux et politiques. Les artistes peuvent utiliser leur art pour dénoncer des injustices, mettre en lumière des problèmes de société et ainsi provoquer une prise de conscience chez les spectateurs. De cette manière, l'art peut également être utilisé pour créer un dialogue entre les individus et pour promouvoir le changement social.

L'art comme moyen de guérison : L'art peut être utilisé comme une forme de thérapie pour les individus qui ont subi des traumatismes ou des troubles mentaux. Les activités artistiques, comme la peinture, la musique ou la danse, peuvent aider les individus à se connecter avec eux-mêmes et avec les autres, à exprimer des émotions difficiles à verbaliser et à trouver des moyens de surmonter leur douleur. De cette manière, l'art peut également être utilisé comme un moyen de se connecter avec les autres et de guérir des blessures émotionnelles.

En conclusion, la citation de Malraux souligne l'importance de l'art dans la vie des êtres humains. L'art est un moyen de se connecter avec les autres, de communiquer des idées et des émotions, de réfléchir sur des problèmes sociaux et de guérir des blessures émotionnelles. En tant que tel, l'art est un outil précieux pour renforcer les liens entre les êtres humains et pour construire une société plus empathique et plus consciente.
    `
},
{
    quote: `"Il n'y a pas de hasard, il n'y a que des rendez-vous."`,
    author: "- Paul Éluard",
    result: `
    La citation "Il n'y a pas de hasard, il n'y a que des rendez-vous" de Paul Éluard soulève l'idée que tout ce qui nous arrive dans la vie est en réalité un rendez-vous, et non pas simplement le fruit du hasard. Cette idée peut être examinée sous différents angles :

La force de l'intention : Selon cette citation, les événements qui se produisent dans notre vie ne sont pas le fruit du hasard, mais plutôt des rendez-vous que nous avons pris consciemment ou inconsciemment avec l'univers. Cela souligne l'importance de la force de l'intention dans la réalisation de nos objectifs et la réalisation de nos rêves.

La loi de l'attraction : Cette citation peut également être considérée à travers le prisme de la loi de l'attraction. Selon cette loi, les pensées que nous émettons dans l'univers attirent à nous des situations et des événements qui correspondent à ces pensées. Ainsi, tout ce qui nous arrive dans la vie est un rendez-vous que nous avons créé avec nos pensées et nos émotions.

Le pouvoir du choix : Cette citation souligne également le pouvoir du choix dans nos vies. Tout ce qui nous arrive n'est pas simplement le fruit du hasard, mais plutôt le résultat de choix que nous avons faits consciemment ou inconsciemment. Ainsi, chaque rencontre ou événement est en réalité une opportunité pour nous de prendre de nouveaux choix et de créer notre propre destinée.

La synchronicité : Enfin, cette citation peut également être considérée à travers le prisme de la synchronicité. Selon ce concept, les événements qui se produisent dans notre vie ne sont pas simplement le fruit du hasard, mais plutôt le résultat de signes ou de symboles de l'univers qui nous dirigent vers notre destinée. Ainsi, tout ce qui nous arrive dans la vie peut être considéré comme un rendez-vous avec notre destinée.

En conclusion, la citation de Paul Éluard "Il n'y a pas de hasard, il n'y a que des rendez-vous" souligne l'idée que tout ce qui nous arrive dans la vie est en réalité un rendez-vous, et non pas simplement le fruit du hasard. Cette idée souligne l'importance de la force de l'intention, de la loi de l'attraction, du pouvoir du choix et de la synchronicité dans nos vies. Elle peut nous aider à prendre conscience de notre capacité à créer notre propre destinée et à être conscients des signes et des opportunités que l'univers nous envoie.
    `
}, {
    quote: `"La poésie, c'est le chant du coeur du monde."`,
    author: `- Jean-Pierre Siméon`,
    result: `
    La citation "La poésie, c'est le chant du coeur du monde" de Philippe Jaccottet évoque l'idée que la poésie est une expression profonde et essentielle de la vie, qui nous permet de mieux comprendre le monde et les émotions qui nous habitent. Cette citation peut être explorée à travers plusieurs axes :

La poésie comme langage universel : La poésie est un langage universel qui transcende les barrières culturelles et linguistiques. Elle nous permet de communiquer des émotions, des expériences et des idées complexes de manière concise et expressive. Ainsi, elle peut être considérée comme le "chant du coeur du monde", car elle exprime les sentiments et les aspirations universelles de l'humanité.

La poésie comme miroir du monde : La poésie nous permet également de mieux comprendre le monde qui nous entoure. En utilisant des images, des métaphores et des symboles, les poètes nous invitent à explorer la nature humaine, les émotions et les relations humaines. De cette manière, la poésie peut être considérée comme une expression du "coeur du monde" qui nous permet de mieux comprendre la complexité et la beauté de la vie.

La poésie comme art de l'émotion : La poésie nous permet également de mieux comprendre nos émotions et de les exprimer de manière créative. En utilisant la langue de manière expressive et symbolique, les poètes nous aident à donner une voix à nos sentiments et à mieux comprendre notre monde intérieur. Ainsi, la poésie peut être considérée comme un "chant du coeur" qui nous permet de mieux comprendre et d'exprimer nos émotions.

La poésie comme résistance : Enfin, la poésie peut être considérée comme un moyen de résister à l'oppression et de défendre les valeurs de la liberté et de la dignité humaine. En utilisant la langue de manière créative et expressive, les poètes peuvent dénoncer les injustices et inspirer les mouvements de résistance. De cette manière, la poésie peut être considérée comme un "chant du coeur" qui appelle à la justice et à la liberté.

En conclusion, la citation "La poésie, c'est le chant du coeur du monde" évoque l'idée que la poésie est une expression profonde et essentielle de la vie, qui nous permet de mieux comprendre le monde et les émotions qui nous habitent. Elle peut être explorée à travers différents axes, notamment en tant que langage universel, miroir du monde, art de l'émotion et moyen de résistance. La poésie est donc un art important qui nous permet de mieux comprendre notre monde et nous-mêmes, tout en exprimant notre humanité commune.
    `
}, {
    quote: `"Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux."`,
    author: ` - Marcel Proust`,
    result: `
    Le sujet "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux" fait référence à une citation célèbre d'un écrivain français, Marcel Proust. Cette citation évoque l'idée que pour découvrir de nouvelles choses dans notre vie, il n'est pas nécessaire de changer notre environnement physique, mais plutôt de changer notre point de vue et notre perception du monde qui nous entoure.

En d'autres termes, il s'agit de comprendre que le véritable voyage de découverte commence dans notre propre esprit et que nous devons être ouverts à de nouvelles expériences et perspectives pour élargir nos horizons et découvrir de nouvelles choses. Cette citation peut être explorée à travers plusieurs axes :

Le voyage intérieur : La citation de Marcel Proust suggère que le véritable voyage de découverte commence par une exploration intérieure, plutôt que par une quête extérieure. Il s'agit de changer notre perception du monde en changeant notre point de vue et en adoptant une attitude plus ouverte et curieuse. Cette ouverture d'esprit nous permet de voir les choses sous un angle différent et d'apprécier des expériences que nous aurions peut-être autrement ignorées.

La force de la perception : La citation de Proust souligne également l'importance de la perception dans notre compréhension du monde. En ayant de "nouveaux yeux", c'est-à-dire en changeant notre façon de voir le monde, nous sommes capables de découvrir des aspects de notre environnement que nous n'avions pas remarqués auparavant. Il s'agit donc d'être attentif et de cultiver notre capacité de perception pour mieux comprendre le monde.

La découverte de soi : Enfin, la citation de Proust peut également être interprétée comme une invitation à explorer notre propre identité et à découvrir qui nous sommes vraiment. En ayant de nouveaux yeux, nous sommes capables de voir les choses sous un angle différent et de découvrir de nouvelles facettes de nous-mêmes que nous n'avions pas encore explorées.

En conclusion, la citation de Marcel Proust "Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux" invite à une exploration intérieure, à une ouverture d'esprit et à une attention accrue à la perception. Pour découvrir de nouvelles choses dans notre vie, il est important de changer notre point de vue et de cultiver notre capacité de perception, plutôt que de simplement chercher de nouveaux environnements. Cette citation peut être considérée comme une invitation à la découverte de soi et à l'exploration du monde qui nous entoure.
    `
}, {
    quote: `"La littérature est une manière plus agréable d'ignorer la vie." `,
    author: `- Fernando Pessoa`,
    result: `
    La citation "La littérature est une manière plus agréable d'ignorer la vie" est souvent attribuée à l'écrivain français Fernando Pessoa. Cette citation soulève plusieurs questions intéressantes sur le rôle de la littérature dans nos vies et son rapport avec la réalité.

D'une part, la citation suggère que la littérature peut nous permettre d'ignorer les réalités de la vie, qu'elles soient agréables ou désagréables. En d'autres termes, la lecture peut nous offrir une évasion de la vie quotidienne, nous permettant de nous plonger dans des mondes imaginaires et des expériences fictives qui nous divertissent et nous distraient des soucis du monde réel.

D'autre part, la citation implique également que la littérature peut être une façon plus agréable de gérer les difficultés de la vie que de les affronter directement. La littérature peut nous offrir un refuge dans lequel nous pouvons échapper temporairement aux problèmes du monde réel, tout en nous permettant de réfléchir sur nos propres expériences et de mieux comprendre le monde qui nous entoure.

Cependant, il est important de se demander si cette évasion de la vie est réellement bénéfique. La littérature peut nous offrir un répit temporaire, mais elle ne peut pas résoudre les problèmes réels de notre vie. Elle peut nous aider à mieux comprendre les défis auxquels nous sommes confrontés, mais elle ne peut pas les résoudre.

En fin de compte, la littérature est une forme d'art et peut être appréciée pour ses qualités esthétiques, ses histoires captivantes et ses personnages mémorables. Mais elle ne doit pas être considérée comme une manière de fuir les réalités de la vie. Au contraire, la littérature peut nous aider à mieux comprendre et à mieux affronter les défis auxquels nous sommes confrontés, en nous offrant des perspectives et des idées nouvelles sur le monde qui nous entoure.
    `
}, {
    quote: `"Le monde ne sera pas détruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire" `,
    author: `- Albert Einstein`,
    result: `
    Cette citation souvent attribuée à Albert Einstein soulève une question importante sur la responsabilité de chacun dans la préservation du monde dans lequel nous vivons.

La citation suggère que ceux qui sont témoins d'actes malveillants et qui ne font rien pour les empêcher sont tout aussi responsables que ceux qui commettent ces actes. En d'autres termes, l'inaction peut être aussi dangereuse que l'action, car elle peut conduire à la perpétuation du mal et à l'aggravation des problèmes auxquels nous sommes confrontés.

Cette citation peut être interprétée dans de nombreux contextes différents, qu'il s'agisse de la destruction de l'environnement, de la propagation de l'injustice sociale ou de la montée du populisme et de l'autoritarisme. Elle souligne l'importance de la prise de conscience et de l'engagement dans la lutte contre les forces destructrices qui menacent notre monde.

En fin de compte, cette citation nous rappelle que chacun d'entre nous a une responsabilité personnelle dans la préservation du monde dans lequel nous vivons. Nous devons être vigilants, agir avec courage et agir de manière proactive pour prévenir le mal et protéger ce qui est précieux et important pour nous tous. Si nous restons passifs et indifférents, nous risquons de perdre la beauté et la diversité du monde que nous avons hérité et que nous devons transmettre aux générations futures.
    `
},
{
    quote: `"La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui"  `,
    author: `- Déclaration des droits de l'homme et du citoyen, 1789`,
    result: `
    Cette citation est souvent attribuée à l'écrivain et philosophe français, Jean-Jacques Rousseau. Elle met en lumière la notion de liberté et de responsabilité dans une société.

La citation suggère que la liberté individuelle ne doit pas être illimitée, mais doit plutôt être équilibrée avec le bien-être de la société dans son ensemble. En d'autres termes, chacun a le droit d'agir selon sa propre volonté tant que cela n'affecte pas négativement les autres membres de la société.

Cette idée est étroitement liée à la notion de "l'état de nature" de Rousseau, où il croit que l'homme est fondamentalement bon mais corrompu par la société. Dans cet état, l'homme jouit d'une liberté naturelle mais doit se soucier de la sécurité de soi et des autres. Selon Rousseau, la vie en société impose certaines limitations sur notre liberté naturelle, mais ces limitations sont nécessaires pour garantir la sécurité et le bien-être de tous.

Cependant, la définition de ce qui constitue un préjudice pour autrui peut être subjective et peut varier d'une personne à l'autre. Il y a donc une marge d'interprétation qui doit être prise en compte pour que cette citation soit appliquée de manière juste et équitable.

En fin de compte, la citation nous rappelle que la liberté est un droit fondamental, mais que ce droit doit être équilibré avec les besoins et les intérêts des autres membres de la société. Cela nécessite une responsabilité individuelle pour éviter de porter préjudice aux autres, tout en nous permettant de jouir pleinement de notre liberté personnelle.
    `
},
{
    quote: `"Le bonheur n'est pas dans la recherche de la perfection, mais dans la tolérance de l'imperfection" `,
    author: `- Dalaï Lama`,
    result: `
    Cette citation souligne l'idée que le bonheur ne réside pas dans la recherche constante de la perfection, mais plutôt dans la capacité de tolérer l'imperfection. Elle suggère que la perfection est un objectif irréalisable, et que la quête de perfection peut entraîner des niveaux élevés de stress, d'anxiété et de déception.

En effet, la recherche constante de la perfection peut empêcher les individus de vivre pleinement et de profiter des moments de leur vie, car ils sont constamment préoccupés par les détails et les erreurs. Au lieu de cela, la tolérance de l'imperfection permet aux individus de vivre pleinement leur vie, de s'accepter et d'accepter les autres avec leurs défauts et leurs qualités.

La tolérance de l'imperfection peut également conduire à une plus grande ouverture d'esprit, à une meilleure communication et à des relations plus harmonieuses. En acceptant que les autres puissent faire des erreurs, nous sommes plus susceptibles d'être compatissants et compréhensifs envers eux, et donc de maintenir des relations plus saines et plus satisfaisantes.

En fin de compte, cette citation nous rappelle que le bonheur ne réside pas dans la recherche de la perfection, mais plutôt dans l'acceptation de l'imperfection. Cela nous permet de vivre pleinement notre vie et d'apprécier les moments présents, tout en maintenant des relations saines et positives avec les autres.
    `
},
{
    quote: `"La culture, c'est ce qui reste quand on a tout oublié"  `,
    author: ` - Émile Zola`,
    result: `
    Cette citation, souvent attribuée à l'écrivain français André Malraux, suggère que la culture est ce qui survit et persiste dans la société, même après que tout le reste a été oublié ou perdu. Elle met en évidence la notion de patrimoine culturel, de tradition et de mémoire collective.

En effet, la culture représente les valeurs, les coutumes, les croyances, les traditions, les œuvres d'art, la musique et la littérature d'une société donnée. Elle est souvent transmise de génération en génération et peut servir de pont entre les différentes époques et générations.

La culture peut également être utilisée comme un moyen de préserver l'histoire et l'identité d'une société. En préservant les traditions, les croyances et les histoires culturelles, la société peut préserver sa mémoire collective et transmettre des enseignements importants aux générations futures.

Cependant, la culture est souvent menacée par la mondialisation et l'homogénéisation culturelle. Dans de nombreux cas, les traditions et les coutumes sont remplacées par des formes de culture plus modernes et commerciales, ce qui peut entraîner une perte de la diversité culturelle et de la mémoire collective.

En fin de compte, cette citation nous rappelle l'importance de la culture et de sa préservation. Elle nous invite à prendre conscience de la valeur de notre patrimoine culturel et à travailler pour le préserver pour les générations futures. Elle nous rappelle que même si tout le reste peut être perdu, la culture peut continuer à nous unir et à nous connecter avec notre histoire et notre identité.
    `
}

]

let isVisible = false

btn.addEventListener('click', function (){
    let random = Math.floor(Math.random() * quotes.length);

    citation.innerText = quotes[random].quote;
    auteur.innerText = quotes[random].author;
    for (let i = 0; i < quotes.length; i++){

        result.innerText = quotes[random].result
    }
    
})

btnSolution.addEventListener('click', () => {
    isVisible = !isVisible
    isVisible ? result.classList.add('is-visible') : result.classList.remove('is-visible')
    

})