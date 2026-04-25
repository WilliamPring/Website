#!/usr/bin/env bash
set -e

SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "New writing piece"
echo "-----------------"
read -rp "Title (e.g. My Post Title): " TITLE
read -rp "Slug (e.g. my-post-title): " SLUG
read -rp "Description (one sentence for meta/listing): " DESCRIPTION
read -rp "Display date (e.g. Apr 2026): " DISPLAY_DATE

TODAY=$(date +%Y-%m-%d)
FILE="$SITE_ROOT/writing/${SLUG}.html"
URL="https://williampring.ca/writing/${SLUG}.html"

if [ -f "$FILE" ]; then
  echo "Error: $FILE already exists."
  exit 1
fi

cat > "$FILE" << HTMLEOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${TITLE} · William Pring</title>
  <meta name="description" content="${DESCRIPTION}">
  <link rel="canonical" href="${URL}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${URL}">
  <meta property="og:title" content="${TITLE} · William Pring">
  <meta property="og:description" content="${DESCRIPTION}">
  <meta property="og:site_name" content="William Pring">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${TITLE} · William Pring">
  <meta name="twitter:description" content="${DESCRIPTION}">
  <link rel="stylesheet" href="../style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${TITLE}",
    "description": "${DESCRIPTION}",
    "datePublished": "${TODAY}",
    "url": "${URL}",
    "author": { "@type": "Person", "name": "William Pring", "url": "https://williampring.ca" },
    "publisher": { "@type": "Person", "name": "William Pring", "url": "https://williampring.ca" }
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "William Pring", "item": "https://williampring.ca/" },
      { "@type": "ListItem", "position": 2, "name": "${TITLE}", "item": "${URL}" }
    ]
  }
  </script>
</head>
<body>
  <main>
    <nav class="breadcrumb">
      <a href="../">William Pring</a> <span>/</span> Writing
    </nav>

    <article>
      <header class="article-header">
        <h1>${TITLE}</h1>
        <p class="article-meta">${DISPLAY_DATE}</p>
      </header>

      <p>Write your content here.</p>

    </article>

    <footer class="article-footer">
      <a href="../">← Back</a>
    </footer>
  </main>
</body>
</html>
HTMLEOF

echo "Created $FILE"

# Add to sitemap.xml
SITEMAP="$SITE_ROOT/sitemap.xml"
SITEMAP_ENTRY="  <url>\n    <loc>${URL}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>never</changefreq>\n    <priority>0.6</priority>\n  </url>"
sed -i "s|</urlset>|${SITEMAP_ENTRY}\n</urlset>|" "$SITEMAP"
echo "Updated sitemap.xml"

# Add to index.html writing list (before the comment placeholder)
INDEX="$SITE_ROOT/index.html"
INDEX_ENTRY="        <li>\n          <a href=\"writing\/${SLUG}.html\">${TITLE}<\/a>\n          <span class=\"date\">${DISPLAY_DATE}<\/span>\n          <p>${DESCRIPTION}<\/p>\n        <\/li>"
sed -i "s|        <!-- Add more write-ups here:|${INDEX_ENTRY}\n        <!-- Add more write-ups here:|" "$INDEX"
echo "Updated index.html"

echo ""
echo "Done. Open writing/${SLUG}.html and start writing."
