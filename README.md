# Sentence Game
Jednoduchá webová aplikace napsaná v React TS / Redux. Pokládá otázky, validuje je a zobrazí výslednou větu.

## URL
https://honzagreb.github.io/think-easy-app/

## Instalace
```
npm install
```

## Redux Store
Rozdělen do dvou Slices

### positionSlice
- Obsahuje momentální index a metody sloužící k imperativní navigaci uživatelského rozhraní.

| Property | Typ | Účel |
| --- | --- | --- |
| currentIndex | number | Index otázky, na níž se uživatel nachází |
| questionsShown | boolean | Dynamický rendering UI |
| validationShown | boolean | Dynamický rendering UI |
| resultsShown | boolean | Dynamický rendering UI |


### questionsSlice

- Obsahuje array question objektů a metody pro zapisování nových odpovědí.
- Na základě počtu otázek jsou renderována nová dialogová okna v **Questions** komponentu. 
- Je tedy možné přidávat do arraye další otázky, UI se změnám automaticky přizpůsobí.

| Typ | Účel |
| --- | --- |
| Question[ ] | List otázek a odpovědí |

```
# Question objekt
{question: '', answer: ''}
```

## Hlavní komponenty 

### Questions 
- Skládá se z **Form** a **Nav** komponentů, které skrze props přijímají questions a currentIndex. 
- **Form** komponent dispatchuje vyplněnou odpověď a zvyšuje currentIndex.
- **Nav** komponent dle počtu questions renderuje navigační buttons, které dispatchují změny currentIndexu. 
- Protože jsou otázky a odpovědi sdružené ve stejném objektu, dříve vyplněné odpovědi jsou zobrazeny jako placeholder korespondující otázky.

### Validation 
- Jednoduchá validace. 
- Jsou-li všechny otázky vyplněné, je uživateli umožněno pokračovat k **Result** komponentu.
- Pokud ne, smí se navrátit zpět do **Questions** komponentu a vyplnit nezodpovězené otázky.

### Result 
- Extrahuje odpovědi z Question arraye a zobrazí je. 
- Reset button uživatele navrátí zpět do **Questions** komponentu a odstraní zapsané odpovědi.

### Menu
- Obsahuje stručný návod k užívání aplikace.
- Lze zobrazit a opět skrýt rozkliknutím Menu buttonu v pravém dolním rohu obrazovky. 

## Bundle.js size
- Parsed size: 170KB
- Gzipped size: 54.5KB
