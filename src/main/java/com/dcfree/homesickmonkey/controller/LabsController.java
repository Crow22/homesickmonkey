package com.dcfree.homesickmonkey.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LabsController {
    @RequestMapping("/labs")
    public String header() {
        return "labs";
    }
}