package com.cgpr.gatewayservice;


        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;
        import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
        import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
        import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
        import org.springframework.context.annotation.Bean;
        import org.springframework.security.config.web.server.ServerHttpSecurity;
        import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
        import org.springframework.security.web.server.SecurityWebFilterChain;
        import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class GatewayServiceApplication {



    @Bean
    DiscoveryClientRouteDefinitionLocator discoveryClientRouteDefinitionLocator(
            ReactiveDiscoveryClient reactiveDiscoveryClient,
            DiscoveryLocatorProperties discoveryLocatorProperties ){
        return new DiscoveryClientRouteDefinitionLocator(reactiveDiscoveryClient, discoveryLocatorProperties);
    }

    public static void main( String[] args ) {
        SpringApplication.run( GatewayServiceApplication.class, args );
    }

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http,
                                                            ReactiveClientRegistrationRepository clientRegistrationRepository) {

        // Require authentication for all requests
        http.cors().and().authorizeExchange().anyExchange().permitAll();

        // Allow showing /home within a frame
//      http.headers().frameOptions().mode( XFrameOptionsServerHttpHeadersWriter.Mode.SAMEORIGIN);

        // Disable CSRF in the gateway to prevent conflicts with proxied service CSRF
        http.csrf().disable();
        return http.build();
    }
}
