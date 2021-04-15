# HTW | Playground: Fork Colors

[![Check colors.json](https://github.com/tigion/htw-playground-fork-colors/actions/workflows/check-colors-json.yaml/badge.svg)](https://github.com/tigion/htw-playground-fork-colors/actions/workflows/check-colors-json.yaml)

Das Repository dient im Praktikum als Spielwiese, um **Fork** und **Pull-Request** kennenzulernen. Es ist eine kleine Webanwendung, welche über GitHub Page angezeigt wird und anhand einer JSON-Datei Farbkreise darstellt.

- GitHub Page: https://tigion.github.io/htw-playground-fork-colors/
- Aufgabenstellung im Praktikum: [Teil 6 - Aufgabe 1.2 - Fork mit Pull-Request](https://www.informatik.htw-dresden.de/~zirkelba/praktika/se/arbeiten-mit-git-und-asciidoc/praktikumsaufgaben-teil-6.html#_aufgabe_1_2_fork_mit_pull_request)

## Worum geht es?

Um einen Farbkreis in diesem Repository zu hinterlassen, muss ein Fork mit einem Pull-Request durchgeführt werden.

Dazu muss in einem Pull-Request die JSON-Datei _colors.json_ im Verzeichnis `/data` angepasst werden. Hier wird ein Eintrag mit dem GitHub-Account oder Namen bei `id:` und einer Farbe im rgb-Format bei `color:` hinerlassen.

## Aufbau der _colors.json_ Datei

In der Datei *colors.json* befinden sich ein Array von Objekten bestehend aus eine ID (`id`) und einer Farbe (`color`):

```json
[
  {
    "id": "Name",
    "color": { "r": 255, "g": 85, "b": 0 }
  },
  {
    "id": "",
    "color": { "r": 255, "g": 255, "b": 255 }
  }
]
```

* `id:` ... GitHub-Account oder anderer Name
* `color:`
  * `r:` ... Wert von **rot** zwischen `0` und `255`
  * `g:` ... Wert von **gelb** zwischen `0` und `255`
  * `b:` ... Wert von **blau** zwischen `0` und `255`

Achtet beim Hinzufügen eines neuen `{ id: ... colors: ... }`-Eintrages darauf, dass sich vor dem letzten Eintrag **ein Komma** und danach **keines** befindet.

## Vorgehen

1. Forke dieses Repository als Kopie in deinen Account.
2. Führe davon einen lokalen Clone auf deinen Rechner aus.
3. (optional) Erstelle dir einen neuen Branch und wechsle in diesen.
4. Füge der *colors.json* einen neuen Eintrag mit deinen Werten hinzu. Alternativ: Passe einen Eintrag an, bei welchem die `id:` noch leer (`""`) ist.
5. Nimm die Änderung als neuen Commit auf und pushe sie mit dem zugehörigen Branch in dein Repository.
6. Schlage mir jetzt die Änderung als Pull-Request vor.
7. Ich schaue mir - *undefinierte Verzögerung* - deinen Pull-Request an. Ist er okay, übernehme ich die Änderung und nach kurzer Zeit ist dein Farbkreis zu sehen. Ist er nicht okay hinterlasse ich einen Kommentar.
8. Ist der Pull-Request erfolgreich von mir übernommen, kann dein Fork (bei nicht gebrauch) gelöscht werden.

Alternativ kann das Editieren direkt auf GitHub im Webbrowser geschehen. Dabei wird automatisch ein Fork mit zugehörigem Pull-Request über einen Änderungsvorschlag (_Propose Changes_) erstellt. Dies ist nur für die Bearbeitung einer einzelnen Datei empfohlen, da für jede angepasste Datei ein Pull-Request erstellt wird.
