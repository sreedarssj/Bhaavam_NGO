/**
 * Post feed for homepage carousel and Resources archive.
 * Carousel shows up to 5; full list lives on Resources.
 */

export interface FeedPost {
  id: string;
  title: string;
  description: string;
  /** Path under /public or external URL */
  image: string;
  date: string;
  category: string;
  content?: string;
}

/** Homepage carousel — max 5 displayed; currently 2 placeholders */
export const carouselPosts: FeedPost[] = [
  {
    id: "dummy-1",
    title: "Understanding Anxiety Together",
    description:
      "A gentle introduction to anxiety, coping strategies, and when to reach out for support.",
    image: "/post1.jpeg",
    date: "2026-05-01",
    category: "Awareness",
    content: "Anxiety is a natural human response to stress. It is the body's alarm system warning us of potential danger. However, when this alarm system triggers too often or too intensely, it can interfere with our daily lives.\n\n### Coping Strategies\n* **Deep Breathing**: Slowing down your breath signals to your brain that you are safe. Inhale for 4 seconds, hold for 4, and exhale for 6.\n* **Grounding (5-4-3-2-1 technique)**: Bring yourself back to the present. Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.\n* **Self-Compassion**: Acknowledge your anxiety without judgment. Gently remind yourself: 'I am feeling anxious right now, but I am safe and this feeling will pass.'",
  },
  {
    id: "dummy-2",
    title: "Self-Care Toolkit for Difficult Days",
    description:
      "Practical, low-energy self-care ideas you can try when things feel overwhelming.",
    image: "/placeholders/post-2.svg",
    date: "2026-05-15",
    category: "Self-Care",
    content: "On difficult days, even simple tasks can feel monumental. That's why we need a 'low-energy' self-care toolkit that doesn't demand much, but brings gentle comfort to our nervous system.\n\n### Low-Energy Ideas\n1. **Hydrate**: Just a glass of cool water can gently wake up and refresh your physical system.\n2. **Change Your Environment**: Shift to a cozy spot, wrap yourself in a soft blanket, or put on your favorite comfortable clothes.\n3. **Sensory Rest**: Allow yourself 10 minutes of complete silence without looking at any screen or phone.\n4. **Gentle Stretch**: Spend just two minutes doing simple neck rolls and shoulder shrugs to release accumulated physical tension.",
  },
];

/** Full post archive (carousel + additional posts for Resources page) */
export const allPosts: FeedPost[] = [
  ...carouselPosts,
  {
    id: "blog-1",
    title: "Healing Takes Time: Embracing the Slow Process",
    description:
      "A comprehensive, deep dive into why emotional healing is spiral rather than linear, and how to retune your nervous system with patience.",
    image: "/placeholders/post-2.svg",
    date: "2026-05-20",
    category: "Article",
    content: "Emotional healing is one of the most misunderstood processes of human experience. In a society driven by productivity, rapid optimization, and instantaneous results, we have been conditioned to view our well-being through a linear lens. We expect that once we identify an emotional wound, seek professional guidance, or begin a self-care practice, our recovery should follow a predictable, upward trajectory. We hope that each day will be progressively lighter than the last, and that our growth will be a clean, orderly ascent toward a state of permanent resolution.\n\nBut anyone who has traversed the actual terrain of psychological healing knows that this linear expectation is a myth. The genuine process of recovery is not a straight line; it is a complex, sometimes disorienting spiral. It is a journey marked by forward strides, unexpected plateaus, and moments where we feel as though we have slipped backward into the very patterns we thought we had outgrown. Understanding this non-linear reality is not a counsel of despair; rather, it is the first and most vital step toward cultivating the deep, unconditional self-compassion that makes true healing possible. In this comprehensive guide, we will explore the anatomy of healing, the physiological underpinnings of our emotional responses, the practices that support our nervous system, and the radical grace required to navigate the spiral journey.\n\n### 1. The Myth of the Straight Line: Why Healing Spirals\n\nWhen we experience an emotional setback—a sudden wave of anxiety after weeks of calm, a return of grief, or a flare-up of old defensive habits—our immediate reaction is often self-judgment. We ask ourselves: 'Why am I feeling this way again?' or 'Have I made no progress at all?' We interpret our temporary struggles as a total failure of our healing efforts. However, the spiral nature of healing tells a completely different story. When we loop back to a familiar pain point, we are not returning to the exact same place we started. Instead, we are revisiting that emotional layer with a new level of awareness, a different set of coping skills, and a deeper capacity for self-regulation. We are passing the same coordinate on the map, but we are doing so from a higher elevation.\n\n* **Revisiting with Awareness**: Each time we experience an old trigger with even a fraction of a second more mindfulness before we react, we are growing. The trigger may still feel painful, but our relationship to it has shifted.\n* **The Layered Release**: Our minds and bodies are wise. They do not release years of accumulated stress, grief, or protective defenses all at once. To do so would overwhelm our system. Instead, our psyche sheds these layers slowly and incrementally, allowing us to integrate each step before moving to the next.\n* **Plateaus as Integration**: The quiet phases of healing—where we do not feel dramatic breakthroughs but simply experience a quiet baseline—are not dead space. They are crucial integration periods where our brain is physically reorganizing itself and solidifying new neural pathways.\n\n### 2. The Physiology of Healing: Understanding Your Nervous System\n\nTo understand why emotional healing takes time, we must look beneath our thoughts and look directly at our biology. Our emotions are not abstract concepts; they are physiological events that occur within our autonomic nervous system (ANS). The autonomic nervous system is divided into two primary branches, which function like the accelerator and the brake of a car:\n\n* **The Sympathetic Nervous System (SNS)**: This is our survival system, responsible for the 'fight-or-flight' response. When we perceive a threat, the SNS floods our bodies with cortisol and adrenaline, accelerating our heart rate, shallowing our breath, and preparing us to defend ourselves or flee.\n* **The Parasympathetic Nervous System (PNS)**: This is our 'rest-and-digest' or 'social engagement' system. When we feel safe, the PNS slows our heart rate, relaxes our muscles, restores digestion, and allows us to connect deeply with others.\n\nWhen we experience chronic stress or unresolved emotional trauma, our nervous system can become stuck in a state of high sympathetic arousal (hyperarousal) or collapse into a state of numbness and immobilization (hypoarousal). In these states, our brain is constantly scanning the environment for danger, making us highly reactive to minor triggers. Healing, therefore, is not just a mental exercise in positive thinking. It is a biological process of retuning our nervous system so that it can return to a baseline of safety. This retuning requires consistent, physical practices of somatic regulation. We cannot reason our way out of a physiological state of panic; we must show our body that it is safe through physical signals.\n\n### 3. Cultivating Radical Self-Compassion\n\nIf our nervous system requires safety to heal, then self-criticism is the ultimate barrier to recovery. When we judge ourselves for having a difficult day, we trigger our own sympathetic survival response. The brain perceives our self-condemnation as a threat, sending us deeper into anxiety or withdrawal. To create the conditions for healing, we must practice what Dr. Kristin Neff defines as 'Self-Compassion.' This practice is composed of three essential pillars:\n\n* **Self-Kindness vs. Self-Judgment**: When we fall short or make a mistake, we actively choose to treat ourselves with the same gentleness, understanding, and warmth we would offer to a beloved friend. Instead of saying, 'I should be over this by now,' we say, 'It is entirely understandable that this hurts right now.'\n* **Common Humanity vs. Isolation**: We recognize that suffering, imperfection, and struggle are shared aspects of the human experience. We are not uniquely broken; rather, we are experiencing a universal struggle that connects us to others who are also navigating their own complex emotional journeys.\n* **Mindfulness vs. Over-Identification**: We hold our painful emotions in balanced awareness. We observe our thoughts and feelings with gentle curiosity without magnifying, suppressing, or getting swept away by them. We learn to say, 'I am noticing a wave of sadness passing through me,' rather than 'I am sad, and this is who I will always be.'\n\n### 4. Somatic Practices for Daily Emotional Maintenance\n\nRetuning a nervous system and building self-compassion are practices built on daily, small routines. Here are four foundational somatic practices that act as emotional anchor points:\n\n1. **Circadian Anchoring**: Support your physical biology by exposing your eyes to natural sunlight within 30 minutes of waking. This simple act regulates your cortisol production, stabilizes your sleep-wake cycle, and establishes a physical foundation for emotional stability.\n2. **Somatic Breathwork**: Use the 'physiological sigh' to instantly reduce acute anxiety. Take two quick, consecutive inhales through your nose (one deep inhale, followed immediately by a sharp top-off inhale), and then let out a slow, long exhale through your mouth. Doing this just three times physically lowers your heart rate and signals your brain to deactivate the sympathetic alarm.\n3. **Trauma De-escalation through Movement**: When we experience stress, physical energy pools in our limbs. Shaking your hands, pacing, dancing, or walking dynamically allows this raw energy to cycle through and leave your body, preventing it from stagnating into somatic tension or chronic exhaustion.\n4. **Co-regulation**: Seek environments where you can safely co-regulate your nervous system with another human being. Sharing eye contact, listening to a warm, gentle voice, or receiving a comforting hug from a trusted partner can instantly calm a highly active threat system.\n\n### 5. Embracing the In-Between Spaces\n\nAs you navigate this spiral path, you will inevitably find yourself in the 'spaces in between'—the plateaus where the old coping mechanisms no longer work, but the new ways of being do not yet feel natural. These spaces can feel highly uncomfortable, confusing, and lonely. But these in-between spaces are the exact crucible of transformation. They are the quiet gaps where your brain is doing the hard work of neuroplasticity, pruning away old reactive pathways and sewing the delicate seeds of new responses. When you are in these quiet gaps, do not push for immediate answers. Allow yourself to simply rest, to be imperfect, and to let the healing happen at its own organic pace.\n\nHealing does not mean reaching a state of absolute immunity to pain, triggers, or sadness. Rather, true healing means expanding your capacity to hold your pain with tenderness. It means growing so large, spacious, and compassionate that you can welcome every part of your emotional landscape—the joy, the fear, the anger, and the sorrow—knowing that each has a purposeful place in your beautiful, complex human journey. Give yourself time. You are growing, you are learning, and you are healing, one gentle breath at a time.",
  },
  {
    id: "blog-2",
    title: "The Courage to Speak: Overcoming Stigma",
    description:
      "Breaking down the fear around discussing our mental struggles and how to start honest conversations.",
    image: "/placeholders/post-1.svg",
    date: "2026-04-15",
    category: "Article",
    content: "Stigma thrives in silence. When we hide our struggles, we build walls that keep help out and isolate us inside. Speaking up about mental health is not a sign of weakness; it is one of the most courageous things a person can do.\n\n### How to Start the Conversation\n* **Choose Your Circle**: Speak to someone you trust completely—a close friend, a partner, or a family member who has earned the right to hear your story.\n* **Use Simple 'I' Statements**: You don't need a medical diagnosis to talk about your pain. Say things like, 'I've been feeling really overwhelmed and lonely lately, and I wanted to share it with you.'\n* **Professional Support**: Remember, seeking counseling or therapy is an act of courage. It is a dedicated space for self-discovery, healing, and personal growth. Your voice matters, and your feelings are completely valid.",
  },
  {
    id: "archive-1",
    title: "Inside Out: Every Emotion Has a Purpose",
    description:
      "How this film reminds us that sadness can be a bridge to healing and connection.",
    image: "/placeholders/post-3.svg",
    date: "2025-04-17",
    category: "Film",
    content: "The movie *Inside Out* is a beautiful masterpiece that explains complex psychological concepts through accessible, charming storytelling. Its most profound lesson is that Sadness is not a negative emotion to be suppressed, but a necessary bridge to healing.\n\n### Core Lessons\n* **Sadness Triggers Empathy**: In the film, it is Sadness who connects with others in their grief, demonstrating that expressing sorrow allows us to receive comfort.\n* **Joy and Sadness Coexist**: A full life requires both. Overprotecting ourselves from sadness often prevents us from experiencing true, deep joy.\n* **Embrace All Emotions**: Fear, Anger, Disgust, Sadness, and Joy all work together to protect and guide us. Every feeling has its place.",
  },
  {
    id: "archive-2",
    title: "An Unquiet Mind — Book Reflection",
    description:
      "A memoir on bipolar disorder, resilience, and the path toward acceptance.",
    image: "/placeholders/post-4.svg",
    date: "2025-04-04",
    category: "Book",
    content: "Kay Redfield Jamison's *An Unquiet Mind* is a powerful, deeply personal memoir exploring the highs and lows of manic-depressive illness (bipolar disorder). Written by a clinical psychologist who lives with the condition, it provides a unique dual perspective of medical knowledge and lived experience.\n\n### Key Reflections\n* **The Battle of Acceptance**: One of the book's major themes is the struggle to accept the need for medication and consistent treatment, highlighting the difficult balance between manic energy and stability.\n* **Resilience through Relationships**: Jamison emphasizes that love, friendship, and strong support networks were just as vital as medicine in her survival.\n* **Unshamed Candor**: The memoir stands as a courageous testament to living successfully and authentically while managing a chronic mental health condition.",
  },
  {
    id: "archive-3",
    title: "Sunlight, Candor & Conversation",
    description:
      "What mental health needs is more unashamed conversation — our founding message.",
    image: "/placeholders/post-5.svg",
    date: "2025-04-03",
    category: "Awareness",
    content: "Our foundation was built on a simple yet revolutionary idea: what mental health needs most is more sunlight, more candor, and more unashamed conversation. When we bring these topics into the open, stigma begins to dissolve.\n\n### Our Core Pillars\n* **Sunlight**: Bringing hidden struggles into the light so nobody has to suffer in dark isolation.\n* **Candor**: Speaking honestly about our vulnerabilities, struggles, and healing, without sugarcoating or pretense.\n* **Conversation**: Building a supportive global community where we listen to learn and speak to connect. We are growing together, one conversation at a time.",
  },
  {
    id: "archive-4",
    title: "Good Will Hunting — Finding Light",
    description:
      "Even in dark moments, there is good worth paying attention to. Healing takes time.",
    image: "/placeholders/post-6.svg",
    date: "2025-04-03",
    category: "Film",
    content: "The cinematic classic *Good Will Hunting* portrays the raw, sometimes painful process of healing from childhood trauma through therapy and trust. It reminds us that our past does not define our future, and that opening up to someone else can set us free.\n\n### Major Takeaways\n* **'It's Not Your Fault'**: The iconic breakthrough scene highlights the critical step of releasing self-blame for trauma that was beyond our control.\n* **The Power of Therapeutic Trust**: Healing cannot be forced. It requires a safe, non-judgmental space built on mutual respect and honesty.\n* **Growth Takes Time**: Moving past defenses and opening up to love and vulnerability is a gradual process. Be patient with your own evolution.",
  },
];

export const CAROUSEL_MAX = 5;
