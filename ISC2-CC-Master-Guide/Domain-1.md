# 🏛️ DOMAIN 1 — Security Principles and Governance

![ISC2](https://img.shields.io/badge/ISC2-Certified%20in%20Cybersecurity-blue?style=for-the-badge)
![Domain](https://img.shields.io/badge/Domain-1%20Security%20Principles%20%26%20Governance-black?style=for-the-badge)

This domain establishes the **foundational concepts of cybersecurity**, including governance, ethics, risk management, and security principles.

---

# 🧠 Core Security Model

```mermaid
mindmap
  root((Information Security))
    CIA Triad
      Confidentiality
        Encryption
        Access Control
      Integrity
        Hashing
        Digital Signatures
      Availability
        Backups
        Redundancy
        RAID
    IAAA
      Identification
      Authentication
      Authorization
      Accountability
```

---

# 🔺 CIA Triad (Confidentiality, Integrity, Availability)

| Principle | Description | Examples |
|---|---|---|
| Confidentiality | Prevent unauthorized access to information | Encryption, Access Control |
| Integrity | Ensure data is not altered improperly | Hashing, Digital Signatures |
| Availability | Ensure systems and data are accessible when needed | Backups, Redundancy, RAID |

---

# 🔐 IAAA Model (Identification, Authentication, Authorization, Accountability)

Security systems follow a logical sequence of identity verification.

```
Identification → Authentication → Authorization → Accountability
```

| Step | Description |
|---|---|
| Identification | Claiming an identity (username, ID) |
| Authentication | Verifying identity (password, biometrics, token) |
| Authorization | Granting permissions based on policy |
| Accountability | Logging and auditing actions performed |

---

# ⚖️ (ISC)² Code of Ethics

The **four mandatory canons** guide ethical decision-making.

⚠ **Exam rule:** The **order matters**.

1. Protect society, the common good, necessary public trust and confidence, and the infrastructure.  
2. Act honorably, honestly, justly, responsibly, and legally.  
3. Provide diligent and competent service to principals.  
4. Advance and protect the profession.

If a conflict occurs:

```
Canon 1 always takes priority
```

---

# 🔎 Due Diligence vs Due Care

| Concept | Meaning | Example |
|---|---|---|
| Due Diligence | Investigating risks before action | Risk assessments, security audits |
| Due Care | Acting to mitigate risks | Applying patches, enforcing policies |

```
Due Diligence = Investigate risks
Due Care = Take action to mitigate risks
```

---

# 📊 Risk Management Process

```mermaid
flowchart LR
    A[Identify Assets] --> B[Identify Threats]
    B --> C[Identify Vulnerabilities]
    C --> D[Risk Assessment]
    D --> E[Risk Treatment]
```

---

# 📉 Quantitative Risk Analysis

### Core Formula

```
ALE (Annual Loss Expectancy) = SLE (Single Loss Expectancy) × ARO (Annual Rate of Occurrence)
```

| Acronym | Meaning |
|---|---|
| AV | Asset Value |
| EF | Exposure Factor |
| SLE | Single Loss Expectancy |
| ARO | Annual Rate of Occurrence |
| ALE | Annual Loss Expectancy |

---

### Step 1 — Calculate SLE

```
SLE (Single Loss Expectancy) = Asset Value × Exposure Factor
```

---

### Step 2 — Calculate ALE

```
ALE (Annual Loss Expectancy) = SLE × ARO
```

---

### Example

| Parameter | Value |
|---|---|
| Asset Value | $100,000 |
| Exposure Factor | 25% |
| ARO | 2 |

```
SLE = 100000 × 0.25
SLE = 25000
```

```
ALE = 25000 × 2
ALE = 50000
```

Estimated annual loss:

```
$50,000
```

---

# 🧾 Risk Treatment Strategies

| Strategy | Description |
|---|---|
| Risk Mitigation | Reduce risk likelihood or impact |
| Risk Transfer | Transfer risk to another entity (insurance) |
| Risk Avoidance | Eliminate the activity causing risk |
| Risk Acceptance | Accept the risk without additional controls |

---

# 🧱 Security Control Categories vs Control Types

⚠ **Exam trap:** Category ≠ Type

```mermaid
graph TD
    A[Security Controls] --> B[Categories]
    A --> C[Types]

    B --> B1[Administrative Controls]
    B --> B2[Technical Controls]
    B --> B3[Physical Controls]

    C --> C1[Preventive Controls]
    C --> C2[Detective Controls]
    C --> C3[Corrective Controls]
    C --> C4[Deterrent Controls]
```

| Category | Description |
|---|---|
| Administrative Controls | Policies, procedures, training |
| Technical Controls | Firewalls, IDS, encryption |
| Physical Controls | Locks, cameras, guards |

| Type | Description |
|---|---|
| Preventive | Prevent incidents from occurring |
| Detective | Detect incidents in progress |
| Corrective | Fix issues after detection |
| Deterrent | Discourage attackers |

---

# 🏷️ Data Classification

Organizations classify data to determine protection requirements.

| Level | Description |
|---|---|
| Public | No restriction |
| Internal | Limited to organization |
| Confidential | Sensitive data |
| Restricted / Secret | Highly sensitive |

---

# 👥 Data Roles

| Role | Responsibility |
|---|---|
| Data Owner | Defines classification and access |
| Data Custodian | Implements controls |
| Data User | Uses data according to policy |

---

# 🧠 Security Design Principles

| Principle | Description |
|---|---|
| Least Privilege | Minimum access necessary |
| Defense in Depth | Multiple layers of security |
| Separation of Duties | Divide critical tasks |
| Need to Know | Access only necessary information |
| Fail Secure | Systems fail in a secure state |
| Economy of Mechanism | Keep systems simple and small |
| Open Design | Security should not depend on secrecy |

---

# 🧬 Zero Trust Architecture

Principle:

```
Never trust, always verify
```

Characteristics:

- Continuous authentication
- Identity verification
- Microsegmentation
- Continuous monitoring

Assumption:

```
The internal network is not automatically trusted
```

---

# ⚠️ Exam Tips

Common traps in the certification exam:

| Topic | Trap |
|---|---|
| Due Diligence vs Due Care | Investigation vs Action |
| Control Categories vs Control Types | Different classifications |
| CIA vs IAAA | Different security models |
| Risk formulas | Must remember ALE formula |

---

# 🎯 Key Takeaway

Domain 1 focuses on **governance, ethics, and risk management**.

These concepts form the **strategic foundation of cybersecurity operations**.