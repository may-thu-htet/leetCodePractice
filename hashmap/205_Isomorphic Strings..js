function isIsomorphic(s, t) {
  // If strings are of different lengths, they cannot be isomorphic
  if (s.length !== t.length) {
    return false;
  }

  // Create two hash maps to store character mappings
  const mapST = {}; // To map characters from s -> t
  const mapTS = {}; // To map characters from t -> s

  // Loop through each character in both strings
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check if there's a conflict in s -> t mapping
    if (mapST[charS] && mapST[charS] !== charT) {
      return false;
    }

    // Check if there's a conflict in t -> s mapping
    if (mapTS[charT] && mapTS[charT] !== charS) {
      return false;
    }

    // Establish the character mappings
    mapST[charS] = charT;
    mapTS[charT] = charS;
  }

  // If no conflicts, the strings are isomorphic
  return true;
}

// ALternative solution

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Array(256).fill(0);
  const mapT = new Array(256).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sChar = s.charCodeAt(i);
    const tChar = t.charCodeAt(i);

    if (mapS[sChar] !== mapT[tChar]) {
      return false;
    }

    // Store the index + 1, as 0 is a valid index for first appearance
    mapS[sChar] = i + 1;
    mapT[tChar] = i + 1;
  }

  return true;
}
