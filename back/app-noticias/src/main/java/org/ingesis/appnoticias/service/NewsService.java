package org.ingesis.appnoticias.service;

import org.ingesis.appnoticias.model.News;
import org.ingesis.appnoticias.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class NewsService {
    private final NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }


    public News getNewsById(String id) {
        Optional<News> news = newsRepository.findById(id);
        return news.orElse(null);
    }

    public List<News> getRecommendedNews() {
        List<News> allNews = newsRepository.findAll();
        return getRandomNews(allNews, 3);
    }

    // Método auxiliar para obtener un número específico de noticias aleatorias
    private List<News> getRandomNews(List<News> newsList, int count) {
        Random rand = new Random();
        return rand.ints(0, newsList.size())
                .distinct()
                .limit(count)
                .mapToObj(newsList::get)
                .toList();
    }
}
