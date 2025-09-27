import React from 'react';

const stories = [
  `Day 1: Shailaputri
Shailaputri, meaning "daughter of the mountains," is the first avatar worshipped in Navratri. She represents purity and strength, riding a bull and holding a trident and lotus. She symbolizes the power of nature and is believed to bless devotees with courage and steadfastness.`,

  `Day 2: Brahmacharini
Brahmacharini is the embodiment of penance and devotion. She is depicted walking barefoot, carrying a japamala (rosary) and kamandalu (water pot). This form inspires perseverance and spiritual longing, teaching that success comes through discipline and hard work.`,

  `Day 3: Chandraghanta
Known for her bravery, Chandraghanta adorns a crescent moon (chandra) on her forehead shaped like a bell (ghanta). She rides a tiger, symbolizing valor. Devotees believe she removes fear and grants strength to face challenges boldly.`,

  `Day 4: Kushmanda
Kushmanda is the creator of the universe, radiating cosmic energy. She has eight hands holding various weapons and a rosary. Her blessings bring vitality, health, and prosperity to her followers.`,

  `Day 5: Skandamata
As the mother of Skanda (Kartikeya), the god of war, Skandamata rides a lion and cradles her son on her lap. She symbolizes maternal love and the power of motherhood, protecting families and granting wisdom.`,

  `Day 6: Katyayani
Born as a warrior goddess to Sage Katyayana, Katyayani is fierce and fearless. She fights demons to restore peace and righteousness. She inspires courage and is worshipped to overcome evil and difficulties.`,

  `Day 7: Kalaratri
A fearsome form of Durga, Kalaratri is dark-skinned with untied hair and a fiery countenance. She destroys darkness and ignorance, bringing spiritual awakening and liberation. Devotees seek her protection from evil forces.`,

  `Day 8: Mahagauri
Representing purity and tranquility, Mahagauri is fair-complexioned and rides a white bull. She embodies serenity, compassion, and forgiveness. Worshipping her cleanses sins and imparts peace.`,

  `Day 9: Siddhidatri
Siddhidatri is the giver of all supernatural powers (siddhis) and spiritual fulfillment. Seated on a lotus, she blesses devotees with wisdom and success, completing the cycle of divine energy through knowledge and enlightenment.`
];

export default function Story({ day }) {
  return (
    <div className="story-container" style={{whiteSpace: 'pre-wrap'}}>
      {stories[day]}
    </div>
  );
}

