---
title: Blog
layout: base
---

## Blog posts

<ul class="no-style">
{%- for post in collections.posts reversed -%}
  <li>
    <article class="post-list-item" itemscope="" itemtype="http://schema.org/Article">
      <header>
        <h2>
          <a itemprop="url" href="{{ post.url }}">
            <span itemprop="headline">{{ post.data.title }}</span>
          </a>
        </h2>
        <time itemprop="datePublished"><strong>Published on:</strong> {{ post.date | dateFormat }}</time>
      </header>
      <p itemprop="description">{{ post.data.ogDescription }}</p>
    </article>
  </li>
{%- endfor -%}
</ul>
