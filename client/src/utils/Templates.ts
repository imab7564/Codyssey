
const design = `
/*─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                          🌊 Welcome to Codyssey 🌊                            │
│                                                                              │
│  Begin your coding journey with clarity and calm.                            │
│  This space is yours — write, explore, and build with ease.                  │
│                                                                              │
│  🧘 Take a breath. 💡 Write code. 🚀 See it come alive.                       │
│                                                                              │
│  Happy Coding!                                                               │
└─────────────────────────────────────────────────────────────────────────────*/
`;

const Templates = (lang: string): string => {
  if (lang === 'cpp') {
    return (
`${design}

#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Welcome to Codyssey!\\nStart your journey here." << endl;
    return 0;
}
`);
  } else if (lang === 'c') {
    return (
`${design}

#include <stdio.h>

int main() {
    printf("Welcome to Codyssey!\\nStart your journey here.\\n");
    return 0;
}
`);
  } else if (lang === 'java') {
    return (
`${design}

public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to Codyssey!\\nStart your journey here.");
    }
}
`);
  } else if (lang === 'python') {
    return (
`"""
${design}
"""

print("Welcome to Codyssey!\\nStart your journey here.")
`);
  }

  return "Welcome to Codyssey!\nStart your journey here.";
};

export default Templates;

