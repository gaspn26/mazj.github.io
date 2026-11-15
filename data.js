// ============================================
// 共用關卡資料（陣列順序即為排名順序）
// 👉 未來有新關卡要排在第 5 名，直接貼在陣列的第 5 個位置，
//    後面所有關卡的排名 (#6, #7...) 與 List Points 都會自動順延！
// ============================================
const levels = [
  { name: "shimmer (amplitron)", victors: ["阿茲"] },
  { name: "The Yandere", victors: ["阿茲"] },
  { name: "Sonic Wave Rebirth", victors: ["阿茲"] },
  { name: "Sonic Wave", victors: ["阿茲"] },
  { name: "Devil Vortex", victors: ["Yuii"] },
  { name: "Killbot", victors: ["FuzzearZ"] },
  { name: "Delta Interface", victors: ["Yuii"] },
  { name: "cloud", victors: ["阿茲"] },
  { name: "The Hell Zone", victors: ["Mazj"] },
  { name: "Auditory Breaker", victors: ["阿茲"] },
  { name: "Worse Trip", victors: ["阿茲"] },
  { name: "Athanatos", victors: ["FuzzearZ"] },
  { name: "Blade of Justice", victors: ["阿茲", "FuzzearZ"] },
  { name: "moment", victors: ["阿茲", "FuzzearZ"] },
  { name: "gravity", victors: ["阿茲"] },
  { name: "Bloodbath", victors: ["FuzzearZ", "阿茲", "Lucas70707", "Yuii"] },
  { name: "Idols", victors: ["Yuii"] },
  { name: "ECSTASY (Filqh)", victors: ["阿茲"] },
  { name: "Dyad", victors: ["FuzzearZ"] },
  { name: "Junk Realm", victors: ["FuzzearZ"] },
  { name: "aftermath", victors: ["阿茲"] },
  { name: "Audio Extraction", victors: ["Yuii"] },
  { name: "Sky Conflux", victors: ["Yuii"] },
  { name: "Daydream", victors: ["阿茲"] },
  { name: "1330X", victors: ["Yuii"] },
  { name: "4ucked Up", victors: ["FuzzearZ"] },
  { name: "Cupid", victors: ["FuzzearZ"] },
  { name: "NEKOTINE", victors: ["FuzzearZ"] },
  { name: "Convulsing Light", victors: ["阿茲"] },
  { name: "Shukufuku", victors: ["阿茲", "FuzzearZ"] },
  { name: "Steel Terrors", victors: ["Yuii", "Aren", "FuzzearZ"] },
  { name: "cloudscape", victors: ["阿茲"] },
  { name: "Gaming 35", victors: ["ジユ"] },
  { name: "Interstellar Entropy", victors: ["FuzzearZ"] },
  { name: "SHURIMA", victors: ["FuzzearZ"] },
  { name: "Cybersonic", victors: ["Yuii"] },
  { name: "doradura", victors: ["阿茲"] },
  { name: "Crowd Control", victors: ["ジユ"] },
  { name: "Allegiance", victors: ["Yuii", "Shizu"] },
  { name: "HyperSonic", victors: ["Yuii", "Shizu"] },
  { name: "PixelSonic", victors: ["Yuii"] },
  { name: "Melon River", victors: ["FuzzearZ"] },
  { name: "NEBULA", victors: ["FuzzearZ"] },
  { name: "Tung Tung Sahurcles", victors: ["阿茲"] },
  { name: "Ion", victors: ["Kurumi"] },
  { name: "Grand Eclipse", victors: ["FuzzearZ"] },
  { name: "Anya III", victors: ["FuzzearZ"] },
  { name: "Tech X", victors: ["FuzzearZ"] },
  { name: "Cataclysm", victors: ["阿茲", "FuzzearZ", "Shizu"] },
  { name: "HeatSeeker", victors: ["FuzzearZ"] },
  { name: "Kanpai", victors: ["阿茲"] },
  { name: "9blue", victors: ["Yuii", "FuzzearZ", "linus"] },
  { name: "FEEL ALIVE", victors: ["FuzzearZ", "Shizu"] },
  { name: "Azurite (Sillow)", victors: ["阿茲"] },
  { name: "Fun Friday", victors: ["FuzzearZ"] },
  { name: "Mizureta", victors: ["阿茲", "Yuii", "FuzzearZ", "ジユ"] },
  { name: "niwa", victors: ["阿茲", "FuzzearZ", "ジユ", "Shizu"] },
  { name: "Without U", victors: ["Aren", "Shizu", "FuzzearZ"] },
  { name: "Prismatic", victors: ["FuzzearZ"] },
  { name: "i want ya", victors: ["FuzzearZ"] },
  { name: "the super hotdog", victors: ["Lucas70707"] },
  { name: "Sweater Weather", victors: ["FuzzearZ", "阿茲"] },
  { name: "Acu", victors: ["阿茲", "Yuii", "FuzzearZ", "Lucas70707", "Shizu", "ジユ", "eta"] },
  { name: "Through The Decay", victors: ["Lucas70707", "Shizu", "ジユ"] },
  { name: "rauchkammer", victors: ["阿茲"] },
];

// ============================================
// 共用計分邏輯：f(x) = 300 ^ ((l - x) / (l - 1))
// ============================================
function calculatePoints(rank, totalLevels) {
  if (totalLevels <= 1) return 300;

  const exponent = (totalLevels - rank) / (totalLevels - 1);
  const points = Math.pow(300, exponent);

  return Math.round(points * 10) / 10;
}