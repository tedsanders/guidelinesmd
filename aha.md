---
title: AHA
layout: specialty
---


<ul class="list-of-guidelines">
	{% for post in site.tags.AHA %}
	<li>
		<details>
		<summary><h2>{{ post.title }}</h2>

{% if post.tags contains 'AHA' %} <a href="{{ site.baseurl }}/aha" class="source-tag">AHA</a> {% endif %} 

		</summary>
		{{ post.content }}
		</details>
    	</li>
	{% endfor %}
</ul>



