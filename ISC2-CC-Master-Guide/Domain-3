# 🏛️ DOMAIN 3 — Access Control Concepts

![ISC2](https://img.shields.io/badge/ISC2-Certified%20in%20Cybersecurity-blue?style=for-the-badge)
![Domain](https://img.shields.io/badge/Domain-3%20Access%20Control-black?style=for-the-badge)

This domain covers **identity management, authentication mechanisms, and access control models** used to ensure that only authorized users can access systems and data.

---

# 🧠 Identity and Access Management (IAM)

```mermaid
mindmap
  root((Identity & Access Management))
    Identification
      Username
      ID Number
    Authentication
      Password
      Biometrics
      Token
    Authorization
      Access Control Policies
      Permissions
    Accountability
      Logging
      Monitoring
      Auditing
```

| Term | Full Name | Description |
|---|---|---|
| IAM | Identity and Access Management | Framework managing digital identities |
| Identification | — | Claiming an identity |
| Authentication | — | Verifying identity |
| Authorization | — | Determining allowed actions |
| Accountability | — | Tracking user actions through logs |

---

# 🔑 Authentication Factors

Authentication mechanisms rely on **different categories of identity verification**.

| Factor Type | Description | Examples |
|---|---|---|
| Something You Know | Knowledge factor | Password, PIN |
| Something You Have | Possession factor | Smart card, security token |
| Something You Are | Inherence factor | Fingerprint, retina scan |
| Somewhere You Are | Location factor | GPS location |
| Something You Do | Behavior factor | Typing pattern |

---

# 🔐 Multi-Factor Authentication (MFA)

**MFA (Multi-Factor Authentication)** requires **two or more different authentication factors**.

Example:

```
Password + Fingerprint
```

⚠ **Exam rule:** Using **two passwords is NOT MFA** because both belong to the **same factor category**.

---

# 🧬 Biometrics

Biometric authentication relies on **unique biological characteristics**.

| Metric | Full Name | Meaning |
|---|---|---|
| FAR | False Acceptance Rate | Probability of unauthorized user being accepted |
| FRR | False Rejection Rate | Probability of legitimate user being rejected |
| CER | Crossover Error Rate | Point where FAR and FRR intersect |

```mermaid
graph LR
    FAR[False Acceptance Rate] --> CER[Crossover Error Rate]
    FRR[False Rejection Rate] --> CER
```

Lower **CER (Crossover Error Rate)** indicates **more accurate biometric systems**.

---

# 🏢 Access Control Models

Access control models define **how permissions are assigned and enforced**.

| Model | Full Name | Description |
|---|---|---|
| DAC | Discretionary Access Control | Owner determines access |
| MAC | Mandatory Access Control | Access based on security labels |
| RBAC | Role-Based Access Control | Access based on job roles |
| ABAC | Attribute-Based Access Control | Access based on attributes and policies |

```mermaid
graph TD
    A[Access Control Models] --> B[DAC]
    A --> C[MAC]
    A --> D[RBAC]
    A --> E[ABAC]
```

---

# 🏷️ Mandatory Access Control (MAC)

Used in **high-security environments**.

Characteristics:

- Centralized control
- Security labels
- Users cannot change permissions

Example classifications:

| Classification | Description |
|---|---|
| Top Secret | Highest classification |
| Secret | Highly sensitive |
| Confidential | Sensitive |
| Unclassified | Public or low sensitivity |

---

# 👔 Role-Based Access Control (RBAC)

Access permissions are assigned to **roles instead of individuals**.

```mermaid
graph TD
    User --> Role
    Role --> Permissions
    Permissions --> Resources
```

Advantages:

- Easier administration
- Scalable for large organizations
- Aligns with job functions

Example:

| Role | Permissions |
|---|---|
| HR Manager | Access employee records |
| System Admin | Manage servers |
| Analyst | View reports |

---

# 🧬 Attribute-Based Access Control (ABAC)

Access decisions are based on **multiple attributes**.

```mermaid
graph TD
    UserAttributes --> PolicyEngine
    ResourceAttributes --> PolicyEngine
    EnvironmentAttributes --> PolicyEngine
    PolicyEngine --> AccessDecision
```

Example attributes:

| Attribute Type | Examples |
|---|---|
| User | Department, role |
| Resource | Data classification |
| Environment | Time, location |

---

# 🔐 Access Control Principles

| Principle | Description |
|---|---|
| Least Privilege | Users receive only necessary permissions |
| Need to Know | Access limited to required information |
| Separation of Duties | Critical tasks divided among multiple individuals |
| Privileged Access Management | Monitoring and controlling admin privileges |

---

# 🛡️ Account Management

Proper account management ensures **secure identity lifecycle**.

| Phase | Description |
|---|---|
| Provisioning | Creating new user accounts |
| Maintenance | Updating permissions |
| Review | Periodic access audits |
| Deprovisioning | Removing accounts after termination |

```mermaid
flowchart LR
    A[Account Creation] --> B[Access Assignment]
    B --> C[Periodic Review]
    C --> D[Account Removal]
```

---

# 📊 Single Sign-On (SSO)

**SSO (Single Sign-On)** allows users to **authenticate once and access multiple systems**.

Advantages:

- Improved user experience
- Reduced password fatigue
- Centralized authentication

⚠ Risk:

If compromised, **multiple systems may be exposed**.

---

# 🪪 Federation and Identity Protocols

Federated identity allows authentication **across multiple organizations**.

| Protocol | Full Name | Description |
|---|---|---|
| SAML | Security Assertion Markup Language | XML-based authentication standard |
| OAuth | Open Authorization | Authorization framework for APIs |
| OpenID Connect | Identity layer on OAuth 2.0 | Authentication protocol |

---

# 🚪 Physical Access Control

Physical controls protect **facilities and hardware**.

| Control | Description |
|---|---|
| Badge Systems | Electronic access cards |
| Biometric Scanners | Fingerprint or retina access |
| Mantrap | Controlled entry vestibule |
| Security Guards | Human monitoring |

```mermaid
graph LR
    A[Physical Security] --> B[Badges]
    A --> C[Biometrics]
    A --> D[Mantrap]
    A --> E[Guards]
```

---

# ⚠️ Exam Tips

Common exam traps:

| Topic | Trap |
|---|---|
| Authentication vs Authorization | Identity verification vs permissions |
| MFA | Must involve different factor categories |
| RBAC vs ABAC | Roles vs attributes |
| FAR vs FRR | Acceptance vs rejection errors |

---

# 🎯 Key Takeaway

Domain 3 focuses on **identity verification and access management**.

The goal is to ensure that:

- Only **authorized users** access systems  
- Permissions follow **least privilege principles**  
- Access is **monitored and controlled**