---
layout: default
title: Nkore Drum Podcast
permalink: /podcast/
---

<div class="page-header">
    <h1>Nkore Drum Podcast</h1>
    <p>Exploring the stories, culture, and voices of Western Uganda</p>
</div>

<div class="podcast-intro">
    <div class="podcast-hero">
        <img src="/assets/images/podcast/hero.jpg" alt="Nkore Drum Podcast Logo">
        <div class="podcast-stats">
            <span class="episode-count">{{ site.data.podcast.episodes | size }} Episodes</span>
            <span class="play-time">{{ site.data.podcast.total_duration }} Hours</span>
        </div>
    </div>
    
    <div class="podcast-description">
        <p>{{ site.data.podcast.description }}</p>
        <div class="podcast-listen">
            <a href="{{ site.data.podcast.spotify_url }}" class="listen-button">
                <i class="fab fa-spotify"></i> Listen on Spotify
            </a>
            <a href="{{ site.data.podcast.apple_url }}" class="listen-button">
                <i class="fab fa-apple"></i> Listen on Apple Podcasts
            </a>
            <a href="{{ site.data.podcast.rss_url }}" class="listen-button">
                <i class="fas fa-rss"></i> RSS Feed
            </a>
        </div>
    </div>
</div>

<div class="podcast-grid">
    {% for episode in site.data.podcast.episodes reversed %}
    <div class="podcast-episode">
        <div class="episode-image">
            <img src="{{ episode.image }}" alt="{{ episode.title }}">
        </div>
        <div class="episode-content">
            <h3>{{ episode.title }}</h3>
            <p class="episode-date">{{ episode.date | date: "%B %d, %Y" }}</p>
            <p class="episode-description">{{ episode.description }}</p>
            <div class="episode-meta">
                <span class="episode-duration">{{ episode.duration }}</span>
                <span class="episode-guest">{{ episode.guest }}</span>
            </div>
            <div class="episode-links">
                <a href="{{ episode.spotify_url }}" class="episode-button">
                    <i class="fab fa-spotify"></i> Play on Spotify
                </a>
                <a href="{{ episode.transcript }}" class="episode-button">
                    <i class="fas fa-file-alt"></i> Read Transcript
                </a>
            </div>
        </div>
    </div>
    {% endfor %}
</div>

<div class="podcast-hosts">
    <h2>Meet the Hosts</h2>
    <div class="hosts-grid">
        {% for host in site.data.podcast.hosts %}
        <div class="host-card">
            <img src="{{ host.image }}" alt="{{ host.name }}">
            <h3>{{ host.name }}</h3>
            <p>{{ host.role }}</p>
            <div class="host-social">
                {% if host.twitter %}
                <a href="{{ host.twitter }}" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                {% endif %}
                {% if host.instagram %}
                <a href="{{ host.instagram }}" target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                {% endif %}
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<div class="podcast-support">
    <h2>Support the Podcast</h2>
    <p>{{ site.data.podcast.support_text }}</p>
    <div class="support-buttons">
        <a href="{{ site.data.podcast.patreon_url }}" class="support-button">
            <i class="fab fa-patreon"></i> Support on Patreon
        </a>
        <a href="{{ site.data.podcast.donate_url }}" class="support-button">
            <i class="fas fa-heart"></i> Make a Donation
        </a>
    </div>
</div>
