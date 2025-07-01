# Auth Demo
A password-based authentication system using Spring Boot 3.5.3 and React.

## Tech Stack
- Backend: Spring Boot 3.5.3, Java 21, H2, JJWT
- Frontend: React (CDNs), Axios, Tailwind CSS
- Tools: Ubuntu, VS Code, Maven

## Setup
1. Install Java 21: `sudo apt install openjdk-21-jdk`
2. Install Maven: `sudo apt install maven`
3. Clone repo: `git clone <repo-url>`
4. Run: `mvn spring-boot:run`
5. Access: `http://localhost:8080`

## Dependencies
- JJWT 0.12.6: For JWT generation and validation.
  - `jjwt-api`: Compile-time API.
  - `jjwt-impl`: Runtime implementation.
  - `jjwt-jackson`: Runtime JSON processing with Jackson.