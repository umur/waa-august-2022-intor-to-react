package com.springsecurity.api;

import com.springsecurity.api.util.BasicControllerInterface;
import com.springsecurity.aspect.OffensiveWordFilter;
import com.springsecurity.domain.Product;
import com.springsecurity.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
@Slf4j
public class ProductController implements BasicControllerInterface<Product, Long> {
    private final ProductService productService;

    @Override
    @GetMapping
    public ResponseEntity<Collection<Product>> getAll() {
        return ResponseEntity.ok().body(productService.getAll());
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Product> get(Long id) {
        Product product = productService.get(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(product);
    }

    @Override
    @OffensiveWordFilter
    @PostMapping
    public ResponseEntity<Product> save(@RequestBody Product product) {
        log.info(product.toString());
        Product p = productService.save(product);
        return ResponseEntity.ok().body(p);
    }

    @Override
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(Long id) {
        productService.delete(id);
        return ResponseEntity.ok().build();
    }
}