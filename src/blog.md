---
title: Blog
layout: base
---

## Blog posts

<ul class="no-style">
{% for post in collections.posts %}
  <li>
    <article class="post-list-item" itemscope="" itemtype="http://schema.org/Article">
      <header>
        <h2>
          <a itemprop="url" href="{{ post.url }}">
            <span itemprop="headline">{{ post.data.title }}</span>
          </a>
        </h2>
        <small>{{ post.data.ogDescription }}</small>
        <p>
          <time itemprop="datePublished"><strong>Published on:</strong> {{ post.data.date }}</time>
        </p>
      </header>
    </article>
  </li>
{% endfor %}
</ul>
