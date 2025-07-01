# Troubleshooting

**DATE: 01 July 2025**
<div style="color:red"><h2>👉 403 Forbidden error on H2 Console</h2></div>

<div style="color: Orange"><b>Issue :</b></div> Accessing the H2 console at http://localhost:8080/h2-console results in a Whitelabel Error Page with the following error:

<br>

    Whitelabel Error Page
    This application has no explicit mapping for /error, so you are seeing this as a fallback.
    Tue Jul 01 06:35:43 IST 2025
    There was an unexpected error (type=Forbidden, status=403)

<div style="color: cyan"><b>Cause :</b></div> Spring Security, included via the spring-boot-starter-security dependency, restricts access to all endpoints by default, including /h2-console. Without explicit configuration, unauthenticated requests to the H2 console are blocked, resulting in a 403 Forbidden error.

<br>
<div style="color:green"><b>Solution :</b></div> 

- Create a SecurityConfig class to permit access to /h2-console/**:

<pre>
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for H2 console and JWT
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/h2-console/**").permitAll() // Allow H2 console
                .anyRequest().authenticated() // Secure all other endpoints
            )
            .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin())); // Allow H2 console in iframe
        return http.build();
    }
}
</pre>

- `**csrf.disable()**`: Disables CSRF protection, as it’s not needed for the H2 console or JWT-based APIs.
- `requestMatchers("/h2-console/**").permitAll()`: Allows unauthenticated access to the H2 console.
- **`headers.frameOptions().sameOrigin()`**: Permits the H2 console to load in an iframe, required for its UI.
- This is a temporary configuration; it will be enhanced with JWT authentication in later phases.