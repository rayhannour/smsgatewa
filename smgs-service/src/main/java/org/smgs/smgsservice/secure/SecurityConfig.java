package org.smgs.smgsservice.secure;

import lombok.AllArgsConstructor;

import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        /*http.cors().and()
                .csrf().disable()
                .authorizeRequests()
                .mvcMatchers("/event/*").authenticated()
                .anyRequest().permitAll()
                .and()
                .oauth2ResourceServer().jwt().jwtAuthenticationConverter(this.jwtAuthenticationConverter());*/

        // Validate tokens through configured OpenID Provider
        http.cors().and().oauth2ResourceServer().jwt().jwtAuthenticationConverter(jwtAuthenticationConverter());
        /*http.cors().and().authorizeRequests()
                .mvcMatchers("/stat/*").hasRole("app-manager")

        .anyRequest().permitAll();*/


        http.cors()
                .and()
                .csrf().disable()
                .authorizeRequests()
                //.mvcMatchers("/event/**").permitAll()
                .mvcMatchers("/stat/*").hasRole("app-manager")
                .anyRequest().permitAll();

        //;
        // Allow showing pages within a frame
        //http.headers().frameOptions().sameOrigin();
    }

    private JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        // Convert realm_access.roles claims to granted authorities, for use in access decisions
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(new KeycloakRealmRoleConverter());
        return jwtAuthenticationConverter;
    }

    @Bean
    public JwtDecoder jwtDecoderByIssuerUri(OAuth2ResourceServerProperties properties) {
        String issuerUri = properties.getJwt().getIssuerUri();
        NimbusJwtDecoder jwtDecoder = ( NimbusJwtDecoder ) JwtDecoders.fromIssuerLocation(issuerUri);
        // Use preferred_username from claims as authentication name, instead of UUID subject
        jwtDecoder.setClaimSetConverter(new UsernameSubClaimAdapter());
        return jwtDecoder;
    }
}