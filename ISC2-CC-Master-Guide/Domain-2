# 🏛️ DOMAIN 2 — Business Continuity, Disaster Recovery and Incident Response

![ISC2](https://img.shields.io/badge/ISC2-Certified%20in%20Cybersecurity-blue?style=for-the-badge)
![Domain](https://img.shields.io/badge/Domain-2%20BCDR%20%26%20Incident%20Response-black?style=for-the-badge)

This domain focuses on **organizational resilience**, ensuring that businesses can **continue operating during disruptions, recover systems after disasters, and properly respond to security incidents**.

---

# 🔁 Organizational Resilience Overview

```mermaid
mindmap
  root((Resilience))
    Business Continuity
      Business Continuity Plan
      Critical Processes
      Alternate Sites
    Disaster Recovery
      Disaster Recovery Plan
      System Restoration
      Backup Recovery
    Incident Response
      Detection
      Containment
      Eradication
      Recovery
      Lessons Learned
```

---

# 📊 Business Impact Analysis (BIA)

**BIA (Business Impact Analysis)** identifies **critical business processes**, evaluates the **impact of disruptions**, and determines recovery priorities.

```mermaid
flowchart LR
    A[Identify Critical Processes] --> B[Determine Business Impact]
    B --> C[Define Recovery Priorities]
    C --> D[Establish Recovery Objectives]
```

| Concept | Description |
|---|---|
| Business Impact Analysis (BIA) | Identifies critical processes and impact of disruption |
| Critical Functions | Business operations essential to organization survival |
| Dependencies | Systems or resources required for operations |

---

# ⏱️ Recovery Metrics

These metrics define **how quickly systems must recover after disruption**.

| Acronym | Full Name | Meaning |
|---|---|---|
| RTO | Recovery Time Objective | Maximum acceptable downtime for a system |
| RPO | Recovery Point Objective | Maximum acceptable data loss measured in time |
| MTD | Maximum Tolerable Downtime | Absolute maximum time a system can be unavailable before business failure |

Relationship between them:

```
MTD ≥ RTO
```

Example timeline:

```mermaid
timeline
    title Disaster Recovery Timeline
    Incident Occurs : System outage begins
    Data Loss Window : Defined by RPO
    System Restoration : Must occur before RTO
    Business Failure Risk : Reached at MTD
```

---

# 🏢 Business Continuity Plan vs Disaster Recovery Plan

| Plan | Full Name | Focus |
|---|---|---|
| BCP | Business Continuity Plan | Maintain business operations during disruption |
| DRP | Disaster Recovery Plan | Restore IT systems and infrastructure |

```mermaid
graph TD
    A[Business Disruption] --> B[Business Continuity Plan]
    B --> C[Maintain Business Operations]

    A --> D[Disaster Recovery Plan]
    D --> E[Restore IT Systems]
```

---

# 🏢 Alternate Processing Sites

Organizations may rely on alternate locations to continue operations.

| Site Type | Description |
|---|---|
| Hot Site | Fully operational site with real-time data replication |
| Warm Site | Partially configured site requiring setup |
| Cold Site | Basic infrastructure with no systems installed |

Recovery speed comparison:

```mermaid
graph LR
    ColdSite -->|Slowest Recovery| WarmSite
    WarmSite -->|Moderate Recovery| HotSite
```

---

# 🚨 Incident Response Lifecycle

The **NIST (National Institute of Standards and Technology)** model defines the phases of incident response.

```mermaid
flowchart LR
    A[Preparation] --> B[Detection and Analysis]
    B --> C[Containment]
    C --> D[Eradication]
    D --> E[Recovery]
    E --> F[Lessons Learned]
```

| Phase | Description |
|---|---|
| Preparation | Policies, tools, and training before incidents |
| Detection and Analysis | Identify and investigate suspicious activity |
| Containment | Limit the spread and impact of the incident |
| Eradication | Remove root cause (malware, attacker access) |
| Recovery | Restore systems to normal operations |
| Lessons Learned | Improve security after incident |

---

# 🛡️ Security Operations Center (SOC)

A **SOC (Security Operations Center)** is responsible for **continuous monitoring and incident detection**.

```mermaid
graph TD
    A[Logs & Security Data] --> B[SIEM]
    B --> C[Alert Generation]
    C --> D[Security Analysts]
    D --> E[Incident Response]
```

| Component | Description |
|---|---|
| SIEM | Security Information and Event Management |
| Security Analysts | Investigate alerts and incidents |
| Threat Monitoring | Continuous monitoring of infrastructure |
| Incident Escalation | Escalate serious incidents to response teams |

---

# 📡 SOC Roles

| Role | Responsibility |
|---|---|
| Tier 1 Analyst | Monitor alerts and triage incidents |
| Tier 2 Analyst | Investigate incidents in depth |
| Tier 3 Analyst | Advanced threat hunting and forensics |
| Incident Handler | Coordinates incident response |

---

# 📊 Backup Strategies

Backups are essential for **disaster recovery and ransomware protection**.

| Backup Type | Description |
|---|---|
| Full Backup | Complete copy of all data |
| Incremental Backup | Only changes since last backup |
| Differential Backup | Changes since last full backup |

Backup strategy best practice:

```
3-2-1 Backup Rule
```

| Rule | Meaning |
|---|---|
| 3 | Three copies of data |
| 2 | Stored on two different media |
| 1 | One copy stored offsite |

---

# 🔐 Common Incident Sources

| Source | Example |
|---|---|
| Malware | Ransomware, trojans |
| Phishing | Credential theft |
| Insider Threat | Malicious or negligent employees |
| System Misconfiguration | Open ports, weak permissions |

---

# ⚠️ Exam Tips

Common exam traps in this domain:

| Topic | Trap |
|---|---|
| BCP vs DRP | Business operations vs IT recovery |
| RTO vs RPO | Downtime vs data loss |
| MTD vs RTO | MTD is the absolute limit |
| Incident Response phases | Must remember correct order |

---

# 🎯 Key Takeaway

Domain 2 focuses on **organizational resilience**.

The goal is to ensure that organizations can:

- Continue operations during disruptions  
- Recover systems after disasters  
- Respond effectively to security incidents  