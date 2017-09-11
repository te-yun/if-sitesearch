/*
 * Copyright 2017 IntraFind Software AG. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.intrafind.sitesearch;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.Principal;

@EnableOAuth2Sso
@EnableWebSecurity
@RestController
public class WebSecurityConfigurer extends WebSecurityConfigurerAdapter {

    @RequestMapping("user")
    public Principal user(Principal principal) {
        return principal;
    }

    @RequestMapping("api")
    public String redirect() {
        return "redirect:https://sitesearch.online";
    }

    @RequestMapping("api1")
    public ModelAndView redirect1() {
        return new ModelAndView("redirect:https://sitesearch.online");
    }

    @RequestMapping("api2")
    public ResponseEntity<Object> redirectToExternalUrl() throws URISyntaxException {
        URI uri = new URI("https://sitesearch.online");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(uri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.SEE_OTHER);
    }

    @RequestMapping("api22")
    public ResponseEntity<Object> redirectToExternalUrl2() throws URISyntaxException {
        URI uri = new URI("https://sitesearch.online");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(uri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.MOVED_PERMANENTLY);
    }

    @RequestMapping("api222")
    public ResponseEntity<Object> redirectToExternalUrl22() throws URISyntaxException {
        URI uri = new URI("https://sitesearch.online");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(uri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.FOUND);
    }

    @RequestMapping("api2222")
    public ResponseEntity<Object> redirectToExternalUrl223() throws URISyntaxException {
        URI uri = new URI("https://sitesearch.online");
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(uri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.MOVED_TEMPORARILY);
    }

    @RequestMapping("api3")
    public void redirectToTwitter(HttpServletResponse httpServletResponse) throws IOException {
        httpServletResponse.sendRedirect("https://sitesearch.online");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .antMatcher("/**")
                .csrf().disable()
                .cors().and() // TODO check if this is the only required CORS enabler, and if the CORS enabler bean in the Application class can be removed
                //                .antMatcher("/**")
                .authorizeRequests()
                .antMatchers(
                        "/**",
                        //                        "/",
                        //                        "/login**",
                        //                        "/webjars/**",
                        //                        "/sites/**",
                        //                        "/sites/*",
                        //                        "/sites",
                        //                        "/si*",
                        ////                        "/sites/rss/**",
                        //                        "/search/**",
                        //                        "/search/*",
                        //                        "/search/",
                        //                        "/sea**",
                        ////                        "/stats/**",
                        ////                        "/searchbar/**",
                        ////                        "/admin/**",
                        ////                        "/dev/**",
                        ////                        "/gadget/**",
                        ////                        "/img/**",
                        ////                        "/searchbar-config/**",
                        ////                        "/theme/**",
                        "/swagger-ui.html", "/swagger-resources/**", "/v2/api-docs"
                )
                .permitAll()

        //                .anyRequest()
        //                .authenticated();


        //                .httpBasic()
        //                .and()
        //                .antMatcher("/**")
        //                .authorizeRequests()
        //                .antMatchers(
        //                        "/**", "/login**", "/webjars/**",
        //                        "/sites/**",
        //                        "/sites/rss/**",
        //                        "/search/**",
        //                        "/stats/**",
        //                        "/searchbar/**",
        //                        "/admin/**",
        //                        "/dev/**",
        //                        "/gadget/**",
        //                        "/img/**",
        //                        "/searchbar-config/**",
        //                        "/theme/**",
        //                        "/swagger-ui.html", "/swagger-resources/**", "/v2/api-docs"
        //                )
        //                .permitAll()
        //                .anyRequest().authenticated()
        //                .and().exceptionHandling().authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/"))
        //                .and().logout().logoutSuccessUrl("/start.html").permitAll()
        //                .and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        //                .ignoringAntMatchers("/clients/**", "/otherprotectedclients/**")
        //                .and().addFilterBefore(ssoFilter(), BasicAuthenticationFilter.class)
        //                .and().addFilterAfter(ssoFilter())
        ;
    }
}
