# Lessons Learned and Observations

**Date**: 01-07-2025

---

<div style="color:red"><b>Lesson 1:</b></div>

**What is `JJWT`**

<div style="color:green"><b>Explanation :</b></div>

JJWT (Java JSON Web Token, `io.jsonwebtoken`) is a popular Java library for creating, parsing, and validating JSON Web Tokens (JWTs).

----

<div style="color:red"><b>Lesson 2:</b></div>

**Why three different JWT Dependencies**

<div style="color:green"><b>Explanation :</b></div>

The JJWT library is designed with a modular architecture, separating its API, implementation, and optional integrations.
    - `jjwt-api`: Contains the core interfaces, classes, and methods for working with JWTs (e.g., Jwts.builder(), Jwts.parser()). Our code directly uses this module to create and parse JWTs.
    - `jjwt-impl`: Provides the implementation of the interfaces defined in jjwt-api. It contains the logic for JWT creation, parsing, and validation. Without this, the jjwt-api interfaces would lack executable logic.
    - `jjwt-jackson`: Integrates JJWT with the Jackson library for JSON serialization/deserialization, used when parsing or creating JWT payloads (e.g., claims in the JWT body).

---

<div style="color:red"><b>Lesson 3:</b></div>

**What is scope in Maven’s pom.xml?**

<div style="color:green"><b>Explanation :</b></div>

The <scope> tag in a Maven dependency specifies when and where a dependency is needed in the project’s lifecycle (e.g., compilation, runtime, testing). It controls which **dependencies are included in the classpath** for different phases (compile, test, run) and whether **they’re packaged in the final artifact** (e.g., JAR). This helps optimize builds, reduce classpath bloat, and ensure dependencies are used appropriately.

    Maven defines six dependency scopes, each with a specific purpose: [**compile(default), runtime, test, provided, system, import**]


---

<div style="color:red"><b>Lesson 4:</b></div>

**When ran the project without integrating any frontend, I see a login form by default. What is that?**

<div style="color:green"><b>Explanation :</b></div>

This is the default Spring Security login page. Spring Security generates this login page dynamically at runtime using its internal code. When you include spring-boot-starter-security as a dependency and do not provide your own login page, Spring Security automatically serves its default login form.








### FORMAT 

<div style="color:red"><b>Lesson :</b></div>
<br>
<div style="color:green"><b>Explanation :</b></div>
