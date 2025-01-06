package org.ingesis.appnoticias.repository;

import org.ingesis.appnoticias.model.News;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface NewsRepository extends MongoRepository<News, String> {
}
