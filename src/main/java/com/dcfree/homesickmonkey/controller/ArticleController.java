package com.dcfree.homesickmonkey.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ArticleController {
    @RequestMapping("/article/newArticle")
    public String newArticle() {
        return "article/newArticle";
    }
}