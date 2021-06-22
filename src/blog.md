---
title: Blog
layout: base
---

## Blog posts

<ul style="list-style: none">
{% for post in collections.posts %}
  <li>
    <article class="post-list-item" itemscope="" itemtype="http://schema.org/Article">
      <header>
        <h2>
          <a itemprop="url" href="{{ post.url }}">
            <span itemprop="headline">{{ post.data.title }}</span>
          </a>
        </h2>
        <p>
          <time itemprop="datePublished">{{ post.data.date }}</time><small> - 3 min read</small>
        </p>
      </header>
    </article>
  </li>
{% endfor %}
</ul>
