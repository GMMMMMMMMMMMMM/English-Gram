const grammarRules = [
    // Verb Tenses
    {
        id: 1,
        rule: "Verb tenses: present simple",
        explanation: "Le présent simple est utilisé pour décrire des habitudes, des vérités générales et des actions qui se produisent régulièrement ou de manière répétée.",
        construction: "The present simple tense is formed by using the base form of the verb for all persons except the third person singular, which adds -s or -es to the verb.",
        example: "Every morning, John [go/goes/going] for a run.",
        options: [
            { text: "go", correct: false },
            { text: "goes", correct: true },
            { text: "going", correct: false }
        ]
    },
    {
        id: 2,
        rule: "Verb tenses: present continuous",
        explanation: "Le présent continu est utilisé pour décrire des actions qui se produisent maintenant ou dans un futur proche.",
        construction: "The present continuous tense is formed by using the present tense of the verb 'to be' (am/is/are) followed by the base form of the verb with -ing.",
        example: "Look! The children [play/are playing/played] in the park.",
        options: [
            { text: "play", correct: false },
            { text: "are playing", correct: true },
            { text: "played", correct: false }
        ]
    },
    {
        id: 3,
        rule: "Verb tenses: past simple",
        explanation: "Le passé simple est utilisé pour décrire des actions qui se sont produites à un moment spécifique dans le passé.",
        construction: "The past simple tense is formed by adding -ed to the base form of regular verbs. Irregular verbs have unique past tense forms.",
        example: "Yesterday, we [visit/visited/visiting] the museum.",
        options: [
            { text: "visit", correct: false },
            { text: "visited", correct: true },
            { text: "visiting", correct: false }
        ]
    },
    {
        id: 4,
        rule: "Verb tenses: past continuous",
        explanation: "L'imparfait est utilisé pour décrire des actions qui se déroulaient à un moment spécifique dans le passé.",
        construction: "The past continuous tense is formed by using the past tense of the verb 'to be' (was/were) followed by the base form of the verb with -ing.",
        example: "While I [read/was reading/readed], the phone rang.",
        options: [
            { text: "read", correct: false },
            { text: "was reading", correct: true },
            { text: "readed", correct: false }
        ]
    },
    {
        id: 5,
        rule: "Verb tenses: present perfect",
        explanation: "Le présent parfait est utilisé pour décrire des actions qui se sont produites à un moment indéterminé ou qui ont une pertinence pour le présent.",
        construction: "The present perfect tense is formed by using the present tense of the verb 'to have' (have/has) followed by the past participle of the main verb.",
        example: "She [has/have/had] already finished her homework.",
        options: [
            { text: "has", correct: true },
            { text: "have", correct: false },
            { text: "had", correct: false }
        ]
    },
    {
        id: 6,
        rule: "Verb tenses: present perfect continuous",
        explanation: "Le présent parfait continu est utilisé pour décrire des actions qui ont commencé dans le passé et qui continuent dans le présent.",
        construction: "The present perfect continuous tense is formed by using the present perfect tense of the verb 'to be' (have/has been) followed by the base form of the verb with -ing.",
        example: "They [have been/has been/had been] studying for hours.",
        options: [
            { text: "have been", correct: true },
            { text: "has been", correct: false },
            { text: "had been", correct: false }
        ]
    },
    {
        id: 7,
        rule: "Verb tenses: past perfect",
        explanation: "Le plus-que-parfait est utilisé pour décrire des actions qui étaient terminées avant une autre action dans le passé.",
        construction: "The past perfect tense is formed by using the past tense of the verb 'to have' (had) followed by the past participle of the main verb.",
        example: "I [had finished/finished/was finishing] my homework before I went out.",
        options: [
            { text: "had finished", correct: true },
            { text: "finished", correct: false },
            { text: "was finishing", correct: false }
        ]
    },
    {
        id: 8,
        rule: "Verb tenses: past perfect continuous",
        explanation: "Le passé parfait continu est utilisé pour décrire des actions qui se déroulaient avant une autre action dans le passé.",
        construction: "The past perfect continuous tense is formed by using the past perfect tense of the verb 'to be' (had been) followed by the base form of the verb with -ing.",
        example: "He [had been/was/had] working for two hours when she called.",
        options: [
            { text: "had been", correct: true },
            { text: "was", correct: false },
            { text: "had", correct: false }
        ]
    },
    {
        id: 9,
        rule: "Verb tenses: future simple",
        explanation: "Le futur simple est utilisé pour décrire des actions qui se produiront dans le futur.",
        construction: "The future simple tense is formed by using 'will' followed by the base form of the verb.",
        example: "She [will/would/shall] go to the store tomorrow.",
        options: [
            { text: "will", correct: true },
            { text: "would", correct: false },
            { text: "shall", correct: false }
        ]
    },
    {
        id: 10,
        rule: "Verb tenses: future continuous",
        explanation: "Le futur continu est utilisé pour décrire des actions qui se dérouleront à un moment spécifique dans le futur.",
        construction: "The future continuous tense is formed by using 'will be' followed by the base form of the verb with -ing.",
        example: "At this time tomorrow, I [will be/would be/am] studying.",
        options: [
            { text: "will be", correct: true },
            { text: "would be", correct: false },
            { text: "am", correct: false }
        ]
    },
    {
        id: 11,
        rule: "Verb tenses: future perfect",
        explanation: "Le futur parfait est utilisé pour décrire des actions qui seront terminées avant un moment spécifique dans le futur.",
        construction: "The future perfect tense is formed by using 'will have' followed by the past participle of the main verb.",
        example: "By next week, they [will have/will/would have] finished the project.",
        options: [
            { text: "will have", correct: true },
            { text: "will", correct: false },
            { text: "would have", correct: false }
        ]
    },
    {
        id: 12,
        rule: "Verb tenses: future perfect continuous",
        explanation: "Le futur parfait continu est utilisé pour décrire des actions qui auront duré une certaine période avant une autre action dans le futur.",
        construction: "The future perfect continuous tense is formed by using 'will have been' followed by the base form of the verb with -ing.",
        example: "By next year, I [will have been/will be/would have been] working here for five years.",
        options: [
            { text: "will have been", correct: true },
            { text: "will be", correct: false },
            { text: "would have been", correct: false }
        ]
    },
    // Articles
    {
        id: 13,
        rule: "Articles: definite article (the)",
        explanation: "L'article défini (the) est utilisé pour désigner des noms spécifiques qui ont déjà été mentionnés ou qui sont facilement identifiables.",
        construction: "The definite article 'the' is used before singular and plural nouns when the noun is specific or known.",
        example: "[The/A/An] cat is on the mat.",
        options: [
            { text: "The", correct: true },
            { text: "A", correct: false },
            { text: "An", correct: false }
        ]
    },
    {
        id: 14,
        rule: "Articles: indefinite articles (a, an)",
        explanation: "Les articles indéfinis (a, an) sont utilisés pour désigner des noms non spécifiques.",
        construction: "The indefinite article 'a' is used before singular nouns that begin with a consonant sound. 'An' is used before singular nouns that begin with a vowel sound.",
        example: "I saw [a/an/the] dog in the park.",
        options: [
            { text: "a", correct: true },
            { text: "an", correct: false },
            { text: "the", correct: false }
        ]
    },
    // Nouns
    {
        id: 15,
        rule: "Plural nouns",
        explanation: "La plupart des noms forment le pluriel en ajoutant -s ou -es.",
        construction: "Most nouns form the plural by adding -s. Nouns ending in -ch, -s, -sh, -x, or -z form the plural by adding -es.",
        example: "We have two [cats/cat/cates] at home.",
        options: [
            { text: "cats", correct: true },
            { text: "cat", correct: false },
            { text: "cates", correct: false }
        ]
    },
    {
        id: 16,
        rule: "Irregular plural nouns",
        explanation: "Certains noms ont des formes plurielles irrégulières.",
        construction: "Some nouns have irregular plural forms that do not follow standard rules.",
        example: "There are several [children/childs/childes] playing outside.",
        options: [
            { text: "children", correct: true },
            { text: "childs", correct: false },
            { text: "childes", correct: false }
        ]
    },
    {
        id: 17,
        rule: "Possessive nouns",
        explanation: "Les noms possessifs montrent la possession en ajoutant une apostrophe et parfois un s.",
        construction: "Possessive nouns are formed by adding an apostrophe and -s for singular nouns, and an apostrophe for plural nouns that already end in -s.",
        example: "This is [Sarah's/Sarahs/Sarah] book.",
        options: [
            { text: "Sarah's", correct: true },
            { text: "Sarahs", correct: false },
            { text: "Sarah", correct: false }
        ]
    },
    // Pronouns
    {
        id: 18,
        rule: "Pronouns: subject pronouns",
        explanation: "Les pronoms sujets remplacent le sujet de la phrase.",
        construction: "Subject pronouns replace the subject (the noun performing the action) in a sentence. They include I, you, he, she, it, we, and they.",
        example: "[He/Him/His] is my friend.",
        options: [
            { text: "He", correct: true },
            { text: "Him", correct: false },
            { text: "His", correct: false }
        ]
    },
    {
        id: 19,
        rule: "Pronouns: object pronouns",
        explanation: "Les pronoms objets remplacent l'objet de la phrase.",
        construction: "Object pronouns replace the object (the noun receiving the action) in a sentence. They include me, you, him, her, it, us, and them.",
        example: "I gave [him/he/his] the book.",
        options: [
            { text: "him", correct: true },
            { text: "he", correct: false },
            { text: "his", correct: false }
        ]
    },
    {
        id: 20,
        rule: "Pronouns: possessive pronouns",
        explanation: "Les pronoms possessifs montrent la possession.",
        construction: "Possessive pronouns show ownership and replace the noun that is owned. They include mine, yours, his, hers, ours, and theirs.",
        example: "This book is [mine/my/I].",
        options: [
            { text: "mine", correct: true },
            { text: "my", correct: false },
            { text: "I", correct: false }
        ]
    },
    // Adjectives
    {
        id: 21,
        rule: "Adjectives",
        explanation: "Les adjectifs décrivent ou modifient les noms.",
        construction: "Adjectives describe or modify nouns and pronouns, often indicating quality, size, or quantity.",
        example: "She has a [beautiful/beauty/beautifully] dress.",
        options: [
            { text: "beautiful", correct: true },
            { text: "beauty", correct: false },
            { text: "beautifully", correct: false }
        ]
    },
    {
        id: 22,
        rule: "Comparative and superlative adjectives",
        explanation: "Les adjectifs comparatifs comparent deux choses ; les adjectifs superlatifs comparent trois choses ou plus.",
        construction: "Comparative adjectives compare two items, typically formed by adding -er or using 'more'. Superlative adjectives compare three or more items, typically formed by adding -est or using 'most'.",
        example: "This book is [better/best/good] than the other one.",
        options: [
            { text: "better", correct: true },
            { text: "best", correct: false },
            { text: "good", correct: false }
        ]
    },
    // Adverbs
    {
        id: 23,
        rule: "Adverbs",
        explanation: "Les adverbes modifient les verbes, les adjectifs ou d'autres adverbes.",
        construction: "Adverbs describe or modify verbs, adjectives, or other adverbs, often ending in -ly.",
        example: "She sings [beautiful/beautifully/beauty].",
        options: [
            { text: "beautifully", correct: true },
            { text: "beautiful", correct: false },
            { text: "beauty", correct: false }
        ]
    },
    // Prepositions
    {
        id: 24,
        rule: "Prepositions of time",
        explanation: "Les prépositions de temps montrent la relation de temps entre les noms et les autres mots.",
        construction: "Prepositions of time (such as at, on, in) are used to indicate specific times, days, dates, and periods.",
        example: "We will meet [at/on/in] noon.",
        options: [
            { text: "at", correct: true },
            { text: "on", correct: false },
            { text: "in", correct: false }
        ]
    },
    {
        id: 25,
        rule: "Prepositions of place",
        explanation: "Les prépositions de lieu montrent la relation de lieu entre les noms et les autres mots.",
        construction: "Prepositions of place (such as in, on, at) are used to show the location of something.",
        example: "The cat is [in/on/at] the box.",
        options: [
            { text: "in", correct: true },
            { text: "on", correct: false },
            { text: "at", correct: false }
        ]
    },
    // Conjunctions
    {
        id: 26,
        rule: "Conjunctions: coordinating conjunctions",
        explanation: "Les conjonctions de coordination relient des mots, des phrases ou des propositions de même importance.",
        construction: "Coordinating conjunctions (such as and, but, or) connect words, phrases, or clauses of equal importance.",
        example: "I like tea [and/but/or] coffee.",
        options: [
            { text: "and", correct: true },
            { text: "but", correct: false },
            { text: "or", correct: false }
        ]
    },
    {
        id: 27,
        rule: "Conjunctions: subordinating conjunctions",
        explanation: "Les conjonctions de subordination relient une proposition subordonnée à une proposition principale.",
        construction: "Subordinating conjunctions (such as if, although, because) connect a dependent clause to an independent clause.",
        example: "I will go [if/although/because] it stops raining.",
        options: [
            { text: "if", correct: true },
            { text: "although", correct: false },
            { text: "because", correct: false }
        ]
    },
    {
        id: 28,
        rule: "Conjunctions: correlative conjunctions",
        explanation: "Les conjonctions corrélatives fonctionnent par paires pour relier des mots, des phrases ou des propositions.",
        construction: "Correlative conjunctions (such as either...or, neither...nor, both...and) work in pairs to connect words, phrases, or clauses.",
        example: "Either you [or/and/nor] I will go.",
        options: [
            { text: "or", correct: true },
            { text: "and", correct: false },
            { text: "nor", correct: false }
        ]
    },
    // Sentence Types
    {
        id: 29,
        rule: "Simple sentences",
        explanation: "Une phrase simple est composée d'une seule proposition indépendante.",
        construction: "A simple sentence consists of a single independent clause with a subject and a predicate.",
        example: "[She reads/Reading she is/She reads and writes].",
        options: [
            { text: "She reads.", correct: true },
            { text: "Reading she is.", correct: false },
            { text: "She reads and writes.", correct: false }
        ]
    },
    {
        id: 30,
        rule: "Compound sentences",
        explanation: "Une phrase composée est composée de deux propositions indépendantes ou plus, reliées par une conjonction de coordination ou un point-virgule.",
        construction: "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction or a semicolon.",
        example: "[She reads, and he writes./She reads and he writes./She reads; he writes.].",
        options: [
            { text: "She reads, and he writes.", correct: true },
            { text: "She reads and he writes.", correct: false },
            { text: "She reads; he writes.", correct: false }
        ]
    },
    {
        id: 31,
        rule: "Complex sentences",
        explanation: "Une phrase complexe est composée d'une proposition indépendante et d'au moins une proposition subordonnée.",
        construction: "A complex sentence consists of one independent clause and at least one dependent clause.",
        example: "[Although it was raining, we went out./Although it was raining, but we went out./Although it was raining; we went out.].",
        options: [
            { text: "Although it was raining, we went out.", correct: true },
            { text: "Although it was raining, but we went out.", correct: false },
            { text: "Although it was raining; we went out.", correct: false }
        ]
    },
    {
        id: 32,
        rule: "Compound-complex sentences",
        explanation: "Une phrase composée-complexe est composée de deux propositions indépendantes ou plus et d'au moins une proposition subordonnée.",
        construction: "A compound-complex sentence consists of two or more independent clauses and at least one dependent clause.",
        example: "[She reads, and he writes when he has time./She reads and he writes when he has time./She reads; and he writes when he has time.].",
        options: [
            { text: "She reads, and he writes when he has time.", correct: true },
            { text: "She reads and he writes when he has time.", correct: false },
            { text: "She reads; and he writes when he has time.", correct: false }
        ]
    },
    // Voice
    {
        id: 33,
        rule: "Active voice",
        explanation: "Dans la voix active, le sujet fait l'action du verbe.",
        construction: "In active voice, the subject performs the action of the verb.",
        example: "[The cat chased the mouse./The mouse was chased by the cat./The cat was chased by the mouse.].",
        options: [
            { text: "The cat chased the mouse.", correct: true },
            { text: "The mouse was chased by the cat.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false }
        ]
    },
    {
        id: 34,
        rule: "Passive voice",
        explanation: "Dans la voix passive, le sujet reçoit l'action du verbe.",
        construction: "In passive voice, the subject receives the action of the verb.",
        example: "[The mouse was chased by the cat./The cat chased the mouse./The cat was chased by the mouse.].",
        options: [
            { text: "The mouse was chased by the cat.", correct: true },
            { text: "The cat chased the mouse.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false }
        ]
    },
    // Reported Speech
    {
        id: 35,
        rule: "Direct and indirect speech",
        explanation: "Le discours direct cite les mots exacts prononcés ; le discours indirect paraphrase ce qui a été dit.",
        construction: "Direct speech quotes the exact words spoken; indirect speech paraphrases what was said.",
        example: "[He said, 'I am tired.'/He said that he was tired./He said, 'He is tired.'].",
        options: [
            { text: "He said that he was tired.", correct: true },
            { text: "He said, 'I am tired.'", correct: false },
            { text: "He said, 'He is tired.'", correct: false }
        ]
    },
    // Conditionals
    {
        id: 36,
        rule: "Zero conditional",
        explanation: "Le conditionnel zéro est utilisé pour les vérités générales ou les lois de la nature.",
        construction: "The zero conditional is used for general truths or laws of nature. It is formed by using the present simple tense in both the if-clause and the main clause.",
        example: "[If you heat water, it boils./If you heat water, it boil./If you heat water, it boiled.].",
        options: [
            { text: "If you heat water, it boils.", correct: true },
            { text: "If you heat water, it boil.", correct: false },
            { text: "If you heat water, it boiled.", correct: false }
        ]
    },
    {
        id: 37,
        rule: "First conditional",
        explanation: "Le premier conditionnel est utilisé pour des situations réelles ou possibles dans le futur.",
        construction: "The first conditional is used for real or possible situations in the future. It is formed by using the present simple tense in the if-clause and the future simple tense in the main clause.",
        example: "[If it rains, we will stay inside./If it rains, we stay inside./If it rained, we will stay inside.].",
        options: [
            { text: "If it rains, we will stay inside.", correct: true },
            { text: "If it rains, we stay inside.", correct: false },
            { text: "If it rained, we will stay inside.", correct: false }
        ]
    },
    {
        id: 38,
        rule: "Second conditional",
        explanation: "Le deuxième conditionnel est utilisé pour des situations hypothétiques ou peu probables dans le présent ou le futur.",
        construction: "The second conditional is used for hypothetical or unlikely situations in the present or future. It is formed by using the past simple tense in the if-clause and 'would' followed by the base form of the verb in the main clause.",
        example: "[If I were rich, I would travel the world./If I am rich, I would travel the world./If I was rich, I would travel the world.].",
        options: [
            { text: "If I were rich, I would travel the world.", correct: true },
            { text: "If I am rich, I would travel the world.", correct: false },
            { text: "If I was rich, I would travel the world.", correct: false }
        ]
    },
    {
        id: 39,
        rule: "Third conditional",
        explanation: "Le troisième conditionnel est utilisé pour des situations hypothétiques dans le passé.",
        construction: "The third conditional is used for hypothetical situations in the past. It is formed by using the past perfect tense in the if-clause and 'would have' followed by the past participle of the verb in the main clause.",
        example: "[If I had known, I would have told you./If I had known, I would tell you./If I have known, I would have told you.].",
        options: [
            { text: "If I had known, I would have told you.", correct: true },
            { text: "If I had known, I would tell you.", correct: false },
            { text: "If I have known, I would have told you.", correct: false }
        ]
    },
    // Modals
    {
        id: 40,
        rule: "Modals: can, could, be able to",
        explanation: "Les modaux 'can', 'could' et 'be able to' sont utilisés pour exprimer la capacité.",
        construction: "Modal verbs 'can', 'could', and 'be able to' are used to express ability. 'Can' is used for present ability, 'could' for past ability, and 'be able to' for general ability.",
        example: "[Can/Could/Be able to] you help me with this task?",
        options: [
            { text: "Can", correct: true },
            { text: "Could", correct: false },
            { text: "Be able to", correct: false }
        ]
    },
    {
        id: 41,
        rule: "Modals: must, have to, need to",
        explanation: "Les modaux 'must', 'have to' et 'need to' sont utilisés pour exprimer l'obligation.",
        construction: "Modal verbs 'must', 'have to', and 'need to' are used to express obligation. 'Must' is used for strong obligation, 'have to' for necessity, and 'need to' for requirement.",
        example: "You [must/have to/need to] finish your homework before you go out.",
        options: [
            { text: "must", correct: true },
            { text: "have to", correct: false },
            { text: "need to", correct: false }
        ]
    },
    {
        id: 42,
        rule: "Modals: should, ought to",
        explanation: "Les modaux 'should' et 'ought to' sont utilisés pour donner des conseils ou exprimer une recommandation.",
        construction: "Modal verbs 'should' and 'ought to' are used to give advice or express recommendations.",
        example: "You [should/ought to/must] see a doctor if you're feeling unwell.",
        options: [
            { text: "should", correct: true },
            { text: "ought to", correct: false },
            { text: "must", correct: false }
        ]
    },
    // Reported Speech
    {
        id: 43,
        rule: "Reported speech: statements",
        explanation: "Le discours rapporté pour les déclarations rapporte ce que quelqu'un a dit en modifiant le temps du verbe.",
        construction: "Reported speech for statements changes the verb tense back one step in time and removes quotation marks.",
        example: "He said, 'I am tired.' → He said that he [was/is/be] tired.",
        options: [
            { text: "was", correct: true },
            { text: "is", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        id: 44,
        rule: "Reported speech: questions",
        explanation: "Le discours rapporté pour les questions change le temps du verbe et utilise 'if' ou 'whether' pour les questions fermées.",
        construction: "Reported speech for questions changes the verb tense and uses 'if' or 'whether' for yes/no questions.",
        example: "She asked, 'Are you coming?' → She asked if I [was/am/be] coming.",
        options: [
            { text: "was", correct: true },
            { text: "am", correct: false },
            { text: "be", correct: false }
        ]
    },
    {
        id: 45,
        rule: "Reported speech: commands",
        explanation: "Le discours rapporté pour les commandes utilise 'to' + l'infinitif du verbe.",
        construction: "Reported speech for commands uses 'to' + the base form of the verb.",
        example: "He said, 'Close the door.' → He told me [to close/to closing/to closed] the door.",
        options: [
            { text: "to close", correct: true },
            { text: "to closing", correct: false },
            { text: "to closed", correct: false }
        ]
    },
    // Relative Clauses
    {
        id: 46,
        rule: "Relative clauses: defining",
        explanation: "Les propositions relatives définissantes fournissent des informations essentielles sur le nom qu'elles modifient.",
        construction: "Defining relative clauses provide essential information about the noun they modify and are not set off by commas.",
        example: "The book [that/which/what] you gave me is excellent.",
        options: [
            { text: "that", correct: true },
            { text: "which", correct: false },
            { text: "what", correct: false }
        ]
    },
    {
        id: 47,
        rule: "Relative clauses: non-defining",
        explanation: "Les propositions relatives non définissantes fournissent des informations supplémentaires et sont séparées par des virgules.",
        construction: "Non-defining relative clauses provide additional information and are set off by commas.",
        example: "My brother, [who/which/that] lives in New York, is coming to visit.",
        options: [
            { text: "who", correct: true },
            { text: "which", correct: false },
            { text: "that", correct: false }
        ]
    },
    // Question Formation
    {
        id: 48,
        rule: "Question formation: yes/no questions",
        explanation: "Les questions fermées commencent par un verbe auxiliaire ou modal suivi du sujet et du verbe principal.",
        construction: "Yes/no questions start with an auxiliary or modal verb followed by the subject and the main verb.",
        example: "[Are/Do/Is] you coming to the party?",
        options: [
            { text: "Are", correct: true },
            { text: "Do", correct: false },
            { text: "Is", correct: false }
        ]
    },
    {
        id: 49,
        rule: "Question formation: WH- questions",
        explanation: "Les questions en WH- sont formées en utilisant des mots interrogatifs comme what, where, when, why, who et how.",
        construction: "WH- questions are formed using question words like what, where, when, why, who, and how followed by an auxiliary verb and the subject.",
        example: "[Why/What/Who] are you late?",
        options: [
            { text: "Why", correct: true },
            { text: "What", correct: false },
            { text: "Who", correct: false }
        ]
    },
    {
        id: 50,
        rule: "Question formation: tag questions",
        explanation: "Les questions tags sont des petites questions ajoutées à la fin d'une phrase pour vérifier des informations ou demander confirmation.",
        construction: "Tag questions are short questions added to the end of a sentence to check information or ask for confirmation.",
        example: "You're coming to the meeting, [aren't you/isn't you/doesn't you]?",
        options: [
            { text: "aren't you", correct: true },
            { text: "isn't you", correct: false },
            { text: "doesn't you", correct: false }
        ]
    }
];
