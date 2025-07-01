# Step by Step building

## Initial setup
- Installed Java 21 `sudo apt install openjdk-21-jdk`

- Installed Maven `sudo apt install maven`

- Spring Project Initializer `https://start.spring.io/`

    - Selected version `3.5.3`
    - Dependencies included :
        - Spring Web
        - Spring Security
        - Spring Data JPA
        - H2 Database
        - Lombok

- Included external dependencies in `pom.xml` file
    - `io.jsonwebtoken:jjwt-api:0.12.6`
    - `io.jsonwebtoken:jjwt-impl:0.12.6`
    - `io.jsonwebtoken:jjwt-jackson:0.12.6`

- Created docs directory for documentation purpose (files included) :
    - `steps.md` (File to document step by step building of the project)
    - `choices.md` (File to document choices I made and why at any moment)
    - `api.md` (File to document API endpoints)
    - `lessons-learned.md` (File to document the knowledge I gained throughout the journey)
    - `troubleshooting.md` (File to document the issues I faced and the solution I invent to solve it)

- Configuring application.properties :
    - H2 DB Config
    - jwt Config