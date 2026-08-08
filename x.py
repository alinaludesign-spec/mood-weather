from pathlib import Path
import re

root = Path(r"e:\АЛИНА\Веб-дизайн\Vibe Coding 2026\Программы\VS Code\Mood weather")
src = root / "mood-weather-v6.html"
text = src.read_text(encoding="utf-8")

m = re.match(r"(?s)<!DOCTYPE html>.*?<head>.*?<style>(.*?)</style>.*?</head>.*?<body>(.*?)</body>.*?</html>", text)
if not m:
    raise SystemExit("Could not parse prototype HTML")

style_css = m.group(1)
body_html = m.group(2)
script_match = re.search(r"<script>(.*?)</script>", text, re.S)
if not script_match:
    raise SystemExit("Could not find script content")
script_js = script_match.group(1)

index_html = f'''<!DOCTYPE html>
<html lang="en" id="mw-html">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Mood Weather</title>
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#EDE7F0">
<link rel="apple-touch-icon" href="/icons/icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
</head>
<body>
{body_html}
<script src="/script.js"></script>
</body>
</html>
'''

(root / "index.html").write_text(index_html, encoding="utf-8")
(root / "style.css").write_text(style_css, encoding="utf-8")
(root / "script.js").write_text(script_js, encoding="utf-8")
print("created index.html, style.css, script.js")
