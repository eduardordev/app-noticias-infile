package org.ingesis.appnoticias.controller;

import org.ingesis.appnoticias.model.News;
import org.ingesis.appnoticias.service.NewsService;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    //@PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<News>> getAllNews() {
        List<News> newsList = newsService.getAllNews();
        return ResponseEntity.ok(newsList);
    }

    @GetMapping("/{id}")
    //@PreAuthorize("hasRole('USER')")
    public ResponseEntity<News> getNewsDetails(@PathVariable String id) {
        News news = newsService.getNewsById(id);
        if (news != null) {
            return ResponseEntity.ok(news);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/recommended")
    //@PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<News>> getRecommendedNews(@PathVariable String id) {
        List<News> recommendedNews = newsService.getRecommendedNews();
        return ResponseEntity.ok(recommendedNews);
    }
}
