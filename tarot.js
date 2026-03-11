/* ─────────────────────────────────────────
   TAROT DATA  (78 cards)
───────────────────────────────────────── */
const TAROT = [
  // MAJOR ARCANA
  {
    id: 0, name: "The Fool", number: "0 • Major Arcana", art: "🃏", keywords: "Beginnings · Freedom · Innocence",
    desc: "The Fool stands at the cliff's edge, pack in hand, gazing upward with blissful unawareness of the precipice below. The universe urges you to take a leap of faith.",
    meaning: "A new journey is beginning. Embrace spontaneity and trust the unknown. The greatest adventures start with a single fearless step into the void."
  },
  {
    id: 1, name: "The Magician", number: "I • Major Arcana", art: "🔮", keywords: "Manifestation · Willpower · Skill",
    desc: "Before the Magician's table lie all four elemental tools — wand, cup, sword, pentacle. Above his head, the lemniscate spins in infinite potential.",
    meaning: "You possess all the tools you need. Channel your will with precision. The forces of heaven flow through you — create the reality you desire."
  },
  {
    id: 2, name: "The High Priestess", number: "II • Major Arcana", art: "🌙", keywords: "Intuition · Mystery · Inner knowing",
    desc: "Veiled between twin pillars, the High Priestess holds the scroll of hidden knowledge. The pomegranate curtain behind her conceals the deepest truths.",
    meaning: "Be still. The answers you seek lie within, not without. Trust your intuition over logic. Hidden forces are at work beneath the surface."
  },
  {
    id: 3, name: "The Empress", number: "III • Major Arcana", art: "🌿", keywords: "Abundance · Fertility · Nature",
    desc: "Crowned with twelve stars, the Empress sits among wheat and pomegranates, the embodiment of Venus. The earth herself is her throne.",
    meaning: "Nurture yourself and others. Abundance flows when we align with nature's rhythms. Creative and emotional fertility are at their peak."
  },
  {
    id: 4, name: "The Emperor", number: "IV • Major Arcana", art: "👑", keywords: "Authority · Structure · Stability",
    desc: "Armored upon his granite throne, the Emperor surveys his vast domain with the ankh of life in one hand and an orb of dominion in the other.",
    meaning: "Establish order. Take charge with discipline and confidence. Strong foundations are being built. Embrace leadership and rational structure."
  },
  {
    id: 5, name: "The Hierophant", number: "V • Major Arcana", art: "✝️", keywords: "Tradition · Guidance · Conformity",
    desc: "Seated between sacred pillars, the Hierophant blesses two disciples with the divine knowledge passed down through the ages.",
    meaning: "Seek wisdom from tradition, mentors, or institutions. There is value in sacred conventions. Learning from established systems will serve you now."
  },
  {
    id: 6, name: "The Lovers", number: "VI • Major Arcana", art: "💞", keywords: "Union · Choice · Harmony",
    desc: "Beneath Raphael's wings, two figures stand in paradise — one gazing heavenward, one toward the other. A monumental choice awaits.",
    meaning: "A significant choice is before you. Follow your heart but align it with your values. True love and authentic partnership are central themes."
  },
  {
    id: 7, name: "The Chariot", number: "VII • Major Arcana", art: "⚔️", keywords: "Victory · Control · Determination",
    desc: "The Charioteer stands triumphant between two sphinxes of opposing forces, steering by will alone — no reins needed when the mind is master.",
    meaning: "Push forward with unwavering determination. Victory is yours if you maintain control. Opposing forces can be harnessed into forward momentum."
  },
  {
    id: 8, name: "Strength", number: "VIII • Major Arcana", art: "🦁", keywords: "Courage · Patience · Inner power",
    desc: "With infinite gentleness, a woman closes the jaws of a lion. Above her head, the lemniscate glows — not force, but compassionate mastery.",
    meaning: "True strength is quiet, patient, and kind. Courage arises from facing your fears with grace, not rage. You are stronger than you know."
  },
  {
    id: 9, name: "The Hermit", number: "IX • Major Arcana", art: "🏔️", keywords: "Solitude · Inner guidance · Wisdom",
    desc: "Alone at the mountain's peak, the Hermit lifts his lantern — its glow a six-pointed star — to guide the seekers far below.",
    meaning: "Withdraw. Seek answers in solitude and reflection. A period of introspection will illuminate your path forward. Wisdom comes from within."
  },
  {
    id: 10, name: "Wheel of Fortune", number: "X • Major Arcana", art: "☸️", keywords: "Cycles · Fate · Turning point",
    desc: "The great wheel spins with sphinxes and serpents. TORA — TARO — ROTA — the eternal cycle of rise and fall, luck and change.",
    meaning: "Life's wheel is turning. A major shift in fortune is underway. Embrace this cycle; what has been low shall rise, and what is high shall humble."
  },
  {
    id: 11, name: "Justice", number: "XI • Major Arcana", art: "⚖️", keywords: "Truth · Fairness · Cause & Effect",
    desc: "Seated between twin pillars, Justice holds the sword of truth and scales of perfect balance. The red robe speaks of the blood price of truth.",
    meaning: "Karmic balance is at hand. Actions have consequences; integrity is your greatest ally. A fair outcome awaits those who deal honestly."
  },
  {
    id: 12, name: "The Hanged Man", number: "XII • Major Arcana", art: "🙃", keywords: "Surrender · Pause · New perspective",
    desc: "Suspended voluntarily, one leg crossed, a golden halo shines about the Hanged Man's calm face. He has released control to gain enlightenment.",
    meaning: "Pause. Surrender to what is. A situation calls not for action, but for letting go. A radical shift in perspective will unlock what force cannot."
  },
  {
    id: 13, name: "Death", number: "XIII • Major Arcana", art: "🌑", keywords: "Transformation · Endings · Rebirth",
    desc: "The pale rider passes beneath the sun, transforming all he touches — king and child alike — not with malice, but with the pure law of change.",
    meaning: "Something must end for something new to begin. Do not fear this transformation; it is the most powerful form of growth. Release and be reborn."
  },
  {
    id: 14, name: "Temperance", number: "XIV • Major Arcana", art: "🌊", keywords: "Balance · Patience · Moderation",
    desc: "An angel pours water between two golden cups, one foot on land, one in the flowing stream. The irises of the field frame a distant solar crown.",
    meaning: "Find the middle path. Blend opposites with patience and grace. Healing comes through measured, steady effort. Moderation is your magic."
  },
  {
    id: 15, name: "The Devil", number: "XV • Major Arcana", art: "🔗", keywords: "Shadow self · Bondage · Materialism",
    desc: "Chained before the horned Baphomet, two figures discover their bonds are loose enough to slip free — if they chose. The chains are their own.",
    meaning: "What enslaves you? Examine your attachments, addictions, and shadow impulses. The chains you bear are largely self-imposed and can be released."
  },
  {
    id: 16, name: "The Tower", number: "XVI • Major Arcana", art: "⚡", keywords: "Sudden change · Upheaval · Revelation",
    desc: "Lightning strikes the golden crown from the tower's summit. Figures fall into the abyss. Every lie, every false foundation — annihilated in an instant.",
    meaning: "A sudden, radical disruption is coming or has arrived. Though shocking, this collapse clears away what was never true. Freedom lies in the rubble."
  },
  {
    id: 17, name: "The Star", number: "XVII • Major Arcana", art: "⭐", keywords: "Hope · Inspiration · Serenity",
    desc: "Beneath seven stars, a naked figure pours celestial water onto the earth and into the pool, renewing what the storm has ravaged.",
    meaning: "After the storm, hope. Healing is flowing into your life. Trust the universe's benevolence. Your light is needed — let it shine without shame."
  },
  {
    id: 18, name: "The Moon", number: "XVIII • Major Arcana", art: "🌕", keywords: "Illusion · Fear · The unconscious",
    desc: "Between twin towers, a crayfish emerges from the pool as dog and wolf howl at the full moon above. Nothing is quite as it seems.",
    meaning: "Beware illusion and self-deception. Fears and subconscious patterns are surfacing. Navigate uncertainty with patience — clarity will come at dawn."
  },
  {
    id: 19, name: "The Sun", number: "XIX • Major Arcana", art: "☀️", keywords: "Joy · Vitality · Success",
    desc: "A radiant child gallops on a white horse beneath the blazing sun, arms wide, sunflowers tall behind. This is pure, triumphant life.",
    meaning: "Bask in optimism and abundance. Success, clarity, and vitality surround you. Allow joy to be simple. This is a moment of genuine celebration."
  },
  {
    id: 20, name: "Judgement", number: "XX • Major Arcana", art: "🎺", keywords: "Awakening · Reckoning · Renewal",
    desc: "Gabriel's trumpet calls the dead from their coffins. They rise with arms outstretched, reborn under judgment — not condemnation, but liberation.",
    meaning: "A powerful awakening is calling you. Hear the call and rise. Forgive the past, release old identities, and step into your true purpose."
  },
  {
    id: 21, name: "The World", number: "XXI • Major Arcana", art: "🌍", keywords: "Completion · Integration · Achievement",
    desc: "Wreathed in laurel victory, a dancing figure holds two wands at the center of an oval wreath, surrounded by the four living creatures of the cosmos.",
    meaning: "You have reached a moment of completion and wholeness. Celebrate the cycle. All lessons integrated, you are ready for the next great beginning."
  },

  // MINOR ARCANA — WANDS
  {
    id: 22, name: "Ace of Wands", number: "Ace • Wands", art: "🔥", keywords: "Inspiration · New beginnings · Spark",
    desc: "A hand emerges from clouds, offering a living wand budding with fresh leaves. Raw creative fire in its purest form.",
    meaning: "A burst of creative energy is available. Seize this spark and act. New ventures, passions, and bold ideas are igniting within you."
  },
  {
    id: 23, name: "Two of Wands", number: "II • Wands", art: "🗺️", keywords: "Planning · Vision · Future",
    desc: "A figure surveys a vast landscape, holding a globe in one hand and a wand in the other. The world stretches before them, waiting.",
    meaning: "Your vision is solid; now it's time to plan the path forward. Partnerships and bold long-range thinking will carry you to new horizons."
  },
  {
    id: 24, name: "Three of Wands", number: "III • Wands", art: "⛵", keywords: "Progress · Expansion · Foresight",
    desc: "Three wands stand firm as ships sail into the distance. The figure watches their investments venture out across the sea.",
    meaning: "Your plans are in motion. Early success confirms you're on the right track. Now expand your vision even further. Growth is assured."
  },
  {
    id: 25, name: "Four of Wands", number: "IV • Wands", art: "🎊", keywords: "Celebration · Home · Harmony",
    desc: "Four flower-garlanded wands frame a distant castle. Figures dance and celebrate beneath the flower-crowned archway.",
    meaning: "A milestone worth celebrating. Community, family, and belonging are highlighted. Joy is shared and rooted. Rest in this moment of harvest."
  },
  {
    id: 26, name: "Five of Wands", number: "V • Wands", art: "⚡", keywords: "Conflict · Competition · Tension",
    desc: "Five youths clash wands in a scrimmage of apparent chaos. But look closer — no one is truly hurt. This is the clash of creativity.",
    meaning: "Competing forces and ideas create friction. Healthy challenge drives growth. Engage the conflict with spirit, not malice."
  },
  {
    id: 27, name: "Six of Wands", number: "VI • Wands", art: "🏆", keywords: "Victory · Recognition · Success",
    desc: "A victor rides through cheering crowds, a laurel-wreathed wand held high. The crowd confirms: this achievement is real.",
    meaning: "Public recognition and well-deserved victory are yours. Confidence is earned now, not arrogance. Accept the acclaim with grace."
  },
  {
    id: 28, name: "Seven of Wands", number: "VII • Wands", art: "🛡️", keywords: "Perseverance · Defense · Conviction",
    desc: "From high ground, one figure defends against six challengers with fierce determination. The advantage is theirs if they hold steady.",
    meaning: "You are being challenged. Stand firm in your position with conviction. Hold your ground — the high ground is yours if you persist."
  },
  {
    id: 29, name: "Eight of Wands", number: "VIII • Wands", art: "💨", keywords: "Momentum · Speed · Communication",
    desc: "Eight wands arc through clear sky in swift, direct flight. Nothing impedes them. The destination is certain.",
    meaning: "Events are accelerating. News, travel, and rapid developments bring swift change. Act decisively — the time is now, not later."
  },
  {
    id: 30, name: "Nine of Wands", number: "IX • Wands", art: "🩹", keywords: "Resilience · Defensiveness · Persistence",
    desc: "A weary but determined figure leans on a wand, wounds visible. Eight more wands stand behind. The battle is not quite over.",
    meaning: "You're exhausted but almost there. One final push remains. Courage is persisting even when you feel depleted. Rest, then press onward."
  },
  {
    id: 31, name: "Ten of Wands", number: "X • Wands", art: "🎋", keywords: "Burden · Responsibility · Overwhelm",
    desc: "A figure staggers under the weight of ten wands, barely able to see the city ahead. The goal is in sight, but the load is immense.",
    meaning: "You've taken on too much. Delegate, prioritize, or release what isn't truly yours to carry. Relief is near if you ask for help."
  },
  {
    id: 32, name: "Page of Wands", number: "Page • Wands", art: "🌱", keywords: "Enthusiasm · Exploration · Discovery",
    desc: "The Page stands in a desert, studying the wand with bright curiosity. Salamanders — symbols of fire — adorn their tunic.",
    meaning: "Approach life with fresh enthusiasm. A message of exciting news may arrive. Explore new ideas with curiosity and no attachment to outcome."
  },
  {
    id: 33, name: "Knight of Wands", number: "Knight • Wands", art: "🐎", keywords: "Energy · Passion · Adventure",
    desc: "The Knight charges forward on a rearing horse, wand aloft. Salamander-adorned armor gleams. Passionate, impulsive, unstoppable.",
    meaning: "Act boldly. Passion and charisma propel you forward. The adventure calls — answer it with full commitment and adventurous spirit."
  },
  {
    id: 34, name: "Queen of Wands", number: "Queen • Wands", art: "🌻", keywords: "Confidence · Independence · Determination",
    desc: "A sunflower in one hand, a wand in the other, the Queen's black cat sits at her feet. She is magnetic, creative, and utterly self-possessed.",
    meaning: "Own your power. Radiate warmth and confidence without apology. Creative leadership and independent spirit are your greatest gifts now."
  },
  {
    id: 35, name: "King of Wands", number: "King • Wands", art: "🦁", keywords: "Leadership · Vision · Entrepreneur",
    desc: "The King sits forward on his throne, leg out, wand in hand — ready to leap into action at any moment. A natural-born visionary leader.",
    meaning: "Visionary leadership is yours. Inspire others with your bold ideas and passionate conviction. Now is the time to build something lasting."
  },

  // MINOR ARCANA — CUPS
  {
    id: 36, name: "Ace of Cups", number: "Ace • Cups", art: "🏆", keywords: "New love · Intuition · Spiritual awakening",
    desc: "A celestial hand offers an overflowing chalice, a dove descending with a blessed wafer. Pure love pours forth in all directions.",
    meaning: "The heart opens. New emotional beginnings — love, creativity, spiritual connection — are flooding in. Receive this gift with an open heart."
  },
  {
    id: 37, name: "Two of Cups", number: "II • Cups", art: "💑", keywords: "Partnership · Mutual attraction · Connection",
    desc: "Two figures exchange cups, a caduceus between them. This bond is alchemical — each makes the other more fully themselves.",
    meaning: "A deep, mutual connection is forming or deepening. Romantic or professional partnership flourishes in an atmosphere of equality and respect."
  },
  {
    id: 38, name: "Three of Cups", number: "III • Cups", art: "🥂", keywords: "Celebration · Community · Friendship",
    desc: "Three women dance in joyful celebration, cups raised to the sky, surrounded by the abundance of the harvest.",
    meaning: "Gather with those you love. Celebrate achievements, milestones, and the simple joy of belonging. Community nourishes the soul."
  },
  {
    id: 39, name: "Four of Cups", number: "IV • Cups", art: "🌫️", keywords: "Apathy · Contemplation · Reevaluation",
    desc: "A figure sits cross-armed under a tree, three cups before them, ignoring the fourth cup offered mysteriously from a cloud.",
    meaning: "A new opportunity is being offered, but you may be too absorbed in discontent to see it. Lift your gaze. Gratitude reveals hidden gifts."
  },
  {
    id: 40, name: "Five of Cups", number: "V • Cups", art: "😔", keywords: "Loss · Grief · Regret",
    desc: "A cloaked figure stares at three spilled cups, ignoring the two that still stand full behind them. Loss is real, but not total.",
    meaning: "Mourn what has been lost, but do not let grief blind you to what remains. Two cups still stand. Recovery is possible when you turn around."
  },
  {
    id: 41, name: "Six of Cups", number: "VI • Cups", art: "🌸", keywords: "Nostalgia · Innocence · Reunion",
    desc: "Two children exchange flowers in a village garden fragrant with memory. The past stretches out like a golden afternoon.",
    meaning: "Reconnect with innocence, nostalgia, and the past. Old friends or patterns return. Simple joys and childhood purity are deeply healing now."
  },
  {
    id: 42, name: "Seven of Cups", number: "VII • Cups", art: "✨", keywords: "Fantasy · Choices · Illusion",
    desc: "A silhouetted figure faces seven cups in a cloud, each containing a different fantasy — wealth, beauty, serpent, castle, wreath, dragon, figure.",
    meaning: "Beware wishful thinking and escapism. Many tempting options appear, but few are real. Ground yourself and discern what is truly worth choosing."
  },
  {
    id: 43, name: "Eight of Cups", number: "VIII • Cups", art: "🚶", keywords: "Withdrawal · Disappointment · Moving on",
    desc: "In darkness, under a bloodied moon, a cloaked figure walks away from eight arranged cups toward distant mountains. Enough is enough.",
    meaning: "What served you once no longer feeds your soul. Walk away with quiet dignity. There is more meaningful fulfillment waiting beyond the horizon."
  },
  {
    id: 44, name: "Nine of Cups", number: "IX • Cups", art: "😊", keywords: "Contentment · Satisfaction · Gratitude",
    desc: "A jolly figure sits smugly before nine golden cups arranged in an arc. The wish card. The dream-come-true card.",
    meaning: "Your wish is granted. Deep emotional satisfaction and material comfort are at hand. Enjoy your good fortune fully — you've earned it."
  },
  {
    id: 45, name: "Ten of Cups", number: "X • Cups", art: "🌈", keywords: "Happiness · Family · Harmony",
    desc: "A couple stands arm in arm as their children dance beneath a rainbow of ten cups. The perfect emotional fulfillment of the human heart.",
    meaning: "True happiness — in family, home, and lasting love — is within reach or is present now. This is the card of dreams genuinely realized."
  },
  {
    id: 46, name: "Page of Cups", number: "Page • Cups", art: "🐟", keywords: "Creativity · Intuition · Curiosity",
    desc: "The Page stares in delighted surprise at a fish who has popped out of his cup to deliver a message. The unconscious speaks in strange ways.",
    meaning: "Be open to unexpected creative inspiration and intuitive messages. Dreamlike, imaginative energy is available. Trust whimsy and wonder."
  },
  {
    id: 47, name: "Knight of Cups", number: "Knight • Cups", art: "🕊️", keywords: "Romance · Idealism · Invitation",
    desc: "The Knight advances slowly, an armored romantic, cup held aloft like a sacred grail, wings on helmet and heels carrying him above earthly concerns.",
    meaning: "A romantic, artistic, idealistic energy is on the move. An invitation or offer arrives with emotional weight. Follow beauty and heartfelt truth."
  },
  {
    id: 48, name: "Queen of Cups", number: "Queen • Cups", art: "🔮", keywords: "Compassion · Intuition · Emotional depth",
    desc: "The Queen gazes dreamily at her elaborate, closed cup. Cherubs adorn her throne. She is the oracle who knows without knowing how she knows.",
    meaning: "Trust your deepest intuitions. Nurture others from a full heart, but do not neglect your own emotional wellbeing. Empathy is your superpower."
  },
  {
    id: 49, name: "King of Cups", number: "King • Cups", art: "🌊", keywords: "Emotional balance · Wisdom · Compassion",
    desc: "The King sits on his floating throne amid turbulent seas, unruffled. He masters emotion without suppressing it.",
    meaning: "Lead with emotional wisdom and calm authority. Balance feeling and reason. Compassionate leadership creates trust and inspires others."
  },

  // MINOR ARCANA — SWORDS
  {
    id: 50, name: "Ace of Swords", number: "Ace • Swords", art: "🗡️", keywords: "Truth · Clarity · Breakthrough",
    desc: "A hand from the clouds holds a sword crowned with a laurel wreath. The ultimate symbol of mental clarity and breakthrough vision.",
    meaning: "Cut through confusion with truth and clear thinking. A breakthrough arrives. Speak and act with radical honesty now."
  },
  {
    id: 51, name: "Two of Swords", number: "II • Swords", art: "😶", keywords: "Indecision · Stalemate · Avoidance",
    desc: "Blindfolded, arms crossed with two swords, a figure sits before a still crescent sea. The truth is obscured by the blindfold she keeps on.",
    meaning: "You are refusing to see something. Remove the blindfold. A decision you've been avoiding must be faced. Neither path is without difficulty."
  },
  {
    id: 52, name: "Three of Swords", number: "III • Swords", art: "💔", keywords: "Heartbreak · Sorrow · Loss",
    desc: "Three swords pierce a red heart in a stormy sky. The image is stark, unapologetic — some truths cut, and they must.",
    meaning: "Grief and heartbreak are real. Allow yourself to feel the pain fully rather than push it away. Healing requires the courage to acknowledge sorrow."
  },
  {
    id: 53, name: "Four of Swords", number: "IV • Swords", art: "🛌", keywords: "Rest · Recovery · Retreat",
    desc: "A knight lies in effigy upon his tomb, three swords above and one below. In stillness, his mind heals what action cannot.",
    meaning: "You need rest. Step away from the conflict and allow recovery. Meditation, solitude, and restoration will prepare you for what comes next."
  },
  {
    id: 54, name: "Five of Swords", number: "V • Swords", art: "😈", keywords: "Conflict · Defeat · Betrayal",
    desc: "A figure collects fallen swords while two defeated figures walk away. Victory through dishonorable means feels hollow.",
    meaning: "Examine the cost of this conflict. A win that creates enemies or compromises integrity may not be worth having. Choose peace where possible."
  },
  {
    id: 55, name: "Six of Swords", number: "VI • Swords", art: "⛵", keywords: "Transition · Moving on · Calmer waters",
    desc: "A ferryman poles two passengers — one cloaked in grief — across waters that grow calmer ahead. Six swords stand in the boat's prow.",
    meaning: "You are moving away from turbulence toward calmer waters. The journey is not joyful yet, but peace awaits. Let go of the storm behind you."
  },
  {
    id: 56, name: "Seven of Swords", number: "VII • Swords", art: "🎭", keywords: "Deception · Strategy · Stealth",
    desc: "A figure sneaks away from camp with five swords, leaving two behind. The escape is calculated, but the camp watches.",
    meaning: "Someone is not being fully honest — perhaps even yourself. Examine where strategy has crossed into deception. Integrity will serve you better."
  },
  {
    id: 57, name: "Eight of Swords", number: "VIII • Swords", art: "🙈", keywords: "Imprisonment · Victim mentality · Restriction",
    desc: "Blindfolded and loosely bound, surrounded by eight swords, a figure stands in pooled water. The swords form a cage — but are not a lock.",
    meaning: "You feel trapped, but the bonds are largely mental. Your perceived limitations are not as fixed as they seem. A small step forward will free you."
  },
  {
    id: 58, name: "Nine of Swords", number: "IX • Swords", art: "😰", keywords: "Anxiety · Nightmares · Despair",
    desc: "A figure sits up in bed, head in hands, nine swords hanging above on a black wall. The darkest hours between midnight and dawn.",
    meaning: "Anxiety and catastrophic thinking are overwhelming you. Most of what you fear will not come to pass. Seek support and reframe your thoughts."
  },
  {
    id: 59, name: "Ten of Swords", number: "X • Swords", art: "🌅", keywords: "Endings · Defeat · Rock bottom",
    desc: "Ten swords pierce a fallen figure on a red shore, yet the sky ahead brightens. Rock bottom is the sturdiest foundation for rebuilding.",
    meaning: "A painful ending or total defeat has landed. But this is the absolute bottom — from here, the only direction is up. Dawn is breaking."
  },
  {
    id: 60, name: "Page of Swords", number: "Page • Swords", art: "🌬️", keywords: "Curiosity · Vigilance · Mental agility",
    desc: "The Page stands at the ready, sword raised, wind tossing hair and clouds above. Alert, curious, quick — perhaps too quick to judge.",
    meaning: "Approach the situation with mental sharpness and curiosity. Gather information before acting. Swift thinking is an asset; impulsiveness is not."
  },
  {
    id: 61, name: "Knight of Swords", number: "Knight • Swords", art: "🌪️", keywords: "Action · Impulsiveness · Ambition",
    desc: "The Knight charges into a storm, sword extended, his horse lunging with reckless speed. Nothing will stop him — for better or worse.",
    meaning: "You're driven to act and speak your truth with force. Channel this fierce energy into purposeful action rather than reckless crusading."
  },
  {
    id: 62, name: "Queen of Swords", number: "Queen • Swords", art: "🦅", keywords: "Clarity · Directness · Independent thought",
    desc: "The Queen sits erect, sword raised, head high, one hand outstretched. She has seen much, suffered much, and sees through pretense instantly.",
    meaning: "Speak plainly and think clearly. Emotional entanglement clouds your vision here. Rely on your sharp intellect and hard-won wisdom."
  },
  {
    id: 63, name: "King of Swords", number: "King • Swords", art: "⚖️", keywords: "Authority · Truth · Ethical power",
    desc: "The King sits in judgment, double-edged sword upright, sky turbulent behind him. His authority is absolute and uncompromising in truth.",
    meaning: "Approach this situation with impartial logic and ethical authority. Clear, firm, and fair communication will resolve even complex disputes."
  },

  // MINOR ARCANA — PENTACLES
  {
    id: 64, name: "Ace of Pentacles", number: "Ace • Pentacles", art: "🪙", keywords: "Opportunity · Abundance · Manifestation",
    desc: "A hand from the heavens offers a golden pentacle, a lush garden archway opening to a flowering path beyond.",
    meaning: "A powerful new material or financial opportunity is offered. Take it with both hands. Seeds planted now will grow into lasting prosperity."
  },
  {
    id: 65, name: "Two of Pentacles", number: "II • Pentacles", art: "♾️", keywords: "Balance · Adaptability · Juggling",
    desc: "A figure dances while juggling two pentacles in an infinity loop, ships riding waves in the turbulent sea behind them.",
    meaning: "You're balancing multiple priorities with varying success. Adaptability and flexibility are your greatest tools right now. Stay light on your feet."
  },
  {
    id: 66, name: "Three of Pentacles", number: "III • Pentacles", art: "🏛️", keywords: "Teamwork · Skill · Mastery",
    desc: "An apprentice consults two others before a great cathedral. Three pentacles mark the arched window above. Mastery is built together.",
    meaning: "Collaboration and skilled teamwork produce masterwork results. Seek feedback and honor others' expertise. Together, you build something magnificent."
  },
  {
    id: 67, name: "Four of Pentacles", number: "IV • Pentacles", art: "💰", keywords: "Security · Control · Hoarding",
    desc: "A figure clings to four pentacles — one on crown, two underfoot, one hugged close to the heart. The city of life recedes behind him.",
    meaning: "Examine your relationship with resources and security. Healthy boundaries differ from fearful hoarding. Is clinging preventing you from living?"
  },
  {
    id: 68, name: "Five of Pentacles", number: "V • Pentacles", art: "🌨️", keywords: "Hardship · Loss · Isolation",
    desc: "Two ragged figures trudge through snow past a lit stained-glass window. Help exists nearby, if only they would look up to find it.",
    meaning: "Hard times test your resilience. But help is closer than you think — reach out. Sometimes the light is just one vulnerable ask away."
  },
  {
    id: 69, name: "Six of Pentacles", number: "VI • Pentacles", art: "🤲", keywords: "Generosity · Charity · Balance of power",
    desc: "A merchant weighs coins in scales, giving to those who kneel but withholding from others. The flow of giving and receiving ebbs and flows.",
    meaning: "What you give returns to you. Share your resources generously and receive help graciously. The scales of generosity balance over time."
  },
  {
    id: 70, name: "Seven of Pentacles", number: "VII • Pentacles", art: "🌱", keywords: "Patience · Investment · Reflection",
    desc: "A farmer leans on his hoe, surveying the seven pentacles growing on his vine with a look of wearied reflection. Is the harvest worth the wait?",
    meaning: "Long-term investment requires patience. Pause and evaluate your progress. Are your efforts aligned with your goals? Adjust if needed."
  },
  {
    id: 71, name: "Eight of Pentacles", number: "VIII • Pentacles", art: "🔨", keywords: "Diligence · Mastery · Craftsmanship",
    desc: "An artisan carves pentacle after pentacle with focused dedication. Six hang on the wall; two more in process. Excellence through repetition.",
    meaning: "Devote yourself fully to your craft. Success now comes through diligence, practice, and mastery. Every hour of focused work compounds."
  },
  {
    id: 72, name: "Nine of Pentacles", number: "IX • Pentacles", art: "🌺", keywords: "Luxury · Self-reliance · Achievement",
    desc: "A richly-dressed woman strolls through her vineyard, a hooded falcon on her wrist. She built this abundance herself.",
    meaning: "You have achieved genuine material and inner abundance through your own efforts. Enjoy the fruits of your independence and cultivated refinement."
  },
  {
    id: 73, name: "Ten of Pentacles", number: "X • Pentacles", art: "🏠", keywords: "Legacy · Inheritance · Long-term success",
    desc: "Beneath an archway of ten pentacles, three generations gather in a city's wealth. An old man, a couple, and children cluster with loyal dogs.",
    meaning: "Lasting wealth, family legacy, and long-term security are at hand. You are part of something that endures beyond your single lifetime."
  },
  {
    id: 74, name: "Page of Pentacles", number: "Page • Pentacles", art: "📚", keywords: "Study · Opportunity · Practicality",
    desc: "The Page studies a glowing pentacle with absorbed focus amid a field of green. The world of material possibility opens before them.",
    meaning: "A new practical opportunity or area of study calls. Approach it with diligence and curiosity. Small, consistent effort builds great things."
  },
  {
    id: 75, name: "Knight of Pentacles", number: "Knight • Pentacles", art: "🐂", keywords: "Responsibility · Reliability · Hard work",
    desc: "The Knight's horse stands still on a plowed field. Unlike the other knights, he does not charge — he surveys the work ahead with steady reliability.",
    meaning: "Slow, steady progress wins this race. Commit to your responsibilities with thoroughness and patient effort. Reliability is your greatest virtue."
  },
  {
    id: 76, name: "Queen of Pentacles", number: "Queen • Pentacles", art: "🌾", keywords: "Practicality · Nurturing · Abundance",
    desc: "The Queen sits in a lush garden, her pentacle cradled like an infant. A hare leaps by — fertility in full bloom. The earth is her domain.",
    meaning: "Blend practicality with nurturing warmth. Create security and comfort for yourself and those you love. Your generosity grows the more you share."
  },
  {
    id: 77, name: "King of Pentacles", number: "King • Pentacles", art: "🏰", keywords: "Wealth · Discipline · Security",
    desc: "The King sits amid vines and pentacles, a bull beneath his foot, his castle rising behind. He has built an empire through patience and discipline.",
    meaning: "Disciplined stewardship of resources produces lasting abundance. Lead with generosity and practical wisdom. Protect and grow what you've built."
  },
];

/* ─────────────────────────────────────────
   STATE
───────────────────────────────────────── */
let state = 'idle'; // idle | shuffling | spread | chosen
let cardEls = [];
let chosenIdx = null;

/* ─────────────────────────────────────────
   STAR FIELD
───────────────────────────────────────── */
(function initStars() {
  const c = document.getElementById('stars-canvas');
  const ctx = c.getContext('2d');
  let stars = [];

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(),
      s: (Math.random() - 0.5) * 0.008
    }));
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      s.a += s.s;
      if (s.a > 1) s.s = -Math.abs(s.s);
      if (s.a < 0) s.s = Math.abs(s.s);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,200,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────
   BUILD DECK
───────────────────────────────────────── */
const deckArea = document.getElementById('deck-area');
const hintText = document.getElementById('hint-text');
const titleText = document.getElementById('title-text');

function buildDeck() {
  deckArea.innerHTML = '';
  cardEls = [];
  const shuffled = [...TAROT].sort(() => Math.random() - 0.5);

  shuffled.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.index = i;
    el.dataset.id = card.id;

    // Stacked offset (3D pile effect)
    const stackZ = -i * 0.7;
    const stackX = (Math.random() - 0.5) * 1.5;
    const stackRot = (Math.random() - 0.5) * 2.5;
    el.style.transform = `translateX(${stackX}px) translateZ(${stackZ}px) rotateZ(${stackRot}deg)`;
    el.style.zIndex = shuffled.length - i;
    el.style.transitionDelay = '0ms';

    el.innerHTML = `
      <div class="back">
        <div class="back-symbol">✦</div>
      </div>
      <div class="face">
        <div class="card-name">${card.name}</div>
        <div class="card-art">${card.art}</div>
        <div class="card-number">${card.number}</div>
      </div>`;

    el.addEventListener('click', () => onCardClick(el, i, card));
    deckArea.appendChild(el);
    cardEls.push({ el, card, stackX, stackRot, i });
  });
}

/* ─────────────────────────────────────────
   FLOATING DECK ANIMATION
───────────────────────────────────────── */
let floatT = 0;
let floatRAF;

function startFloat() {
  cancelAnimationFrame(floatRAF);
  function tick() {
    floatT += 0.012;
    const y = Math.sin(floatT) * 8;
    const rx = Math.sin(floatT * 0.7) * 6;
    const ry = Math.cos(floatT * 0.5) * 8;
    deckArea.style.transform = `translateY(${y}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    floatRAF = requestAnimationFrame(tick);
  }
  tick();
}

function stopFloat() {
  cancelAnimationFrame(floatRAF);
  deckArea.style.transform = '';
}

/* ─────────────────────────────────────────
   CLICK DECK (idle → shuffle → spread)
───────────────────────────────────────── */
deckArea.addEventListener('click', (e) => {
  if (state === 'idle') {
    e.stopPropagation();
    startShuffle();
  }
});

function startShuffle() {
  state = 'shuffling';
  stopFloat();
  hintText.textContent = 'The cards are being shuffled…';
  deckArea.classList.add('shuffling');

  const total = cardEls.length;

  // PHASE 1: Fan-explode outward (Z-only rotation, no X/Y flip)
  cardEls.forEach(({ el }, i) => {
    const delay = i * 12;
    setTimeout(() => {
      const angle = (i / total) * Math.PI * 2;
      const radius = 55 + Math.random() * 40;
      const tx = Math.cos(angle) * radius;
      const ty = Math.sin(angle) * radius * 0.6;
      const rz = (Math.random() - 0.5) * 60;
      el.style.transition = 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)';
      el.style.transform = `translate(${tx}px,${ty}px) rotateZ(${rz}deg)`;
    }, delay);
  });

  // PHASE 2: Rapid riffle — alternate left/right
  const phase1End = total * 12 + 500;
  cardEls.forEach(({ el }, i) => {
    const delay = phase1End + i * 18;
    setTimeout(() => {
      const side = i % 2 === 0 ? 1 : -1;
      const tx = side * (20 + Math.random() * 20);
      const ty = (Math.random() - 0.5) * 20;
      const rz = side * (8 + Math.random() * 12);
      el.style.transition = 'transform 0.3s ease-in-out';
      el.style.transform = `translate(${tx}px,${ty}px) rotateZ(${rz}deg)`;
    }, delay);
  });

  // PHASE 3: Re-stack tightly
  const phase2End = phase1End + total * 18 + 400;
  setTimeout(() => {
    cardEls.forEach(({ el, stackX, stackRot }, i) => {
      const delay = i * 8;
      setTimeout(() => {
        el.style.transition = 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)';
        el.style.transform = `translateX(${stackX}px) rotateZ(${stackRot}deg)`;
      }, delay);
    });
  }, phase2End);

  const phase3End = phase2End + total * 8 + 450;
  setTimeout(() => {
    deckArea.classList.remove('shuffling');
    autoReveal();
  }, phase3End);
}

/* ─────────────────────────────────────────
   AUTO REVEAL
───────────────────────────────────────── */
function autoReveal() {
  state = 'chosen';
  hintText.textContent = 'The cards have chosen…';
  titleText.style.opacity = '0';

  // Random pick
  const idx = Math.floor(Math.random() * cardEls.length);
  const { el, card } = cardEls[idx];

  // Cascade-fade all other cards
  cardEls.forEach(({ el: c }, j) => {
    if (j === idx) return;
    c.style.transition = `opacity 0.25s ease ${Math.abs(j - idx) * 5}ms`;
    c.style.opacity = '0';
    c.style.pointerEvents = 'none';
  });

  // Rip chosen card out of deck-area into body as fixed element
  const rect = el.getBoundingClientRect();
  el.style.position = 'fixed';
  el.style.left = rect.left + 'px';
  el.style.top = rect.top + 'px';
  el.style.width = rect.width + 'px';
  el.style.height = rect.height + 'px';
  el.style.margin = '0';
  el.style.zIndex = '300';
  el.style.transform = '';
  document.body.appendChild(el);

  const finalW = 190;
  const finalH = 300;
  const finalL = (window.innerWidth - finalW) / 2;
  const finalT = (window.innerHeight - finalH) / 2 - 20;

  // Step 1: Rise & glow
  requestAnimationFrame(() => requestAnimationFrame(() => {
    el.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';
    el.style.transform = 'translateY(-28px) scale(1.12)';
    el.style.boxShadow = '0 0 60px rgba(201,168,76,0.9), 0 0 120px rgba(107,33,168,0.5)';
  }));

  // Step 2: Fly to screen center
  setTimeout(() => {
    el.style.transition = 'left 0.52s cubic-bezier(0.25,0.46,0.45,0.94), top 0.52s cubic-bezier(0.25,0.46,0.45,0.94), width 0.52s ease, height 0.52s ease, transform 0.3s ease, box-shadow 0.52s ease';
    el.style.left = finalL + 'px';
    el.style.top = finalT + 'px';
    el.style.width = finalW + 'px';
    el.style.height = finalH + 'px';
    el.style.transform = 'scale(1)';
    el.style.boxShadow = '0 0 80px rgba(201,168,76,0.7), 0 0 160px rgba(107,33,168,0.45)';
  }, 420);

  // Step 3: Spin 2.5× on Y axis → lands face-up at 900° (= 180° mod 360°)
  setTimeout(() => {
    el.style.transition = 'transform 1.1s cubic-bezier(0.23,1,0.32,1)';
    el.style.transform = 'rotateY(900deg)';
  }, 1050);

  // Step 4: Burst + hide fixed card + show overlay
  setTimeout(() => {
    hintText.textContent = '';
    burstParticles(el);
    // Fade out the fixed card so only the overlay card shows
    el.style.transition = 'opacity 0.4s ease';
    el.style.opacity = '0';
    setTimeout(() => showReveal(card), 350);
  }, 2300);
}

/* ─────────────────────────────────────────
   CARD CHOSEN
───────────────────────────────────────── */
function onCardClick(el, i, card) {
  // Card clicks are only used programmatically via autoReveal; ignore direct clicks
  return;
}

/* ─────────────────────────────────────────
   REVEAL OVERLAY
───────────────────────────────────────── */
function showReveal(card) {
  const ov = document.getElementById('reveal-overlay');
  document.getElementById('reveal-card-name').textContent = card.name;
  document.getElementById('reveal-card-art').textContent = card.art;
  document.getElementById('reveal-card-number').textContent = card.number;
  document.getElementById('reveal-title').textContent = card.name;
  document.getElementById('reveal-keywords').textContent = card.keywords;
  document.getElementById('reveal-desc').textContent = card.desc;
  document.getElementById('reveal-meaning').textContent = '✦ ' + card.meaning;
  ov.classList.add('visible');
}

/* ─────────────────────────────────────────
   DRAW AGAIN
───────────────────────────────────────── */
document.getElementById('again-btn').addEventListener('click', resetAll);

function resetAll() {
  const ov = document.getElementById('reveal-overlay');
  ov.classList.remove('visible');

  // Remove any card ripped to <body> during autoReveal
  document.querySelectorAll('body > .card').forEach(c => c.remove());

  state = 'idle';
  chosenIdx = null;
  hintText.textContent = 'Click the deck to draw your fate';
  titleText.style.opacity = '1';

  deckArea.style.width = '200px';
  deckArea.style.height = '300px';
  deckArea.style.left = '';
  deckArea.style.top = '';
  deckArea.style.position = 'relative';
  deckArea.style.cursor = 'pointer';

  setTimeout(() => {
    buildDeck();
    startFloat();
  }, 400);
}

/* ─────────────────────────────────────────
   PARTICLES
───────────────────────────────────────── */
function burstParticles(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const colors = ['#c9a84c', '#e8c97a', '#9b59b6', '#ffffff', '#f39c12'];

  for (let p = 0; p < 24; p++) {
    const dot = document.createElement('div');
    dot.className = 'particle';
    const angle = (Math.PI * 2 / 24) * p + Math.random() * 0.3;
    const dist = 60 + Math.random() * 100;
    dot.style.cssText = `
      left: ${cx}px; top: ${cy}px;
      width: ${3 + Math.random() * 5}px;
      height: ${3 + Math.random() * 5}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --tx: ${Math.cos(angle) * dist}px;
      --ty: ${Math.sin(angle) * dist}px;
      animation-duration: ${0.8 + Math.random() * 0.5}s;
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1400);
  }
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
buildDeck();
startFloat();
