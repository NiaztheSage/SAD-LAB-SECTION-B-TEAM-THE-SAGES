**NI-ODTCN**

**Software Requirements Specification**

*National & International Organ Donation and Transplant Coordination Network*

**Version:** 0.1 — Initial Draft

**Date:** November 20, 2026

**Course:** CSE 3412 · System Analysis and Design Lab · Section B · Fall 2026

**Team:** Team: The Sages — Section B

**Course Teacher:** Rejwan Ahmed, CSE Department, United International University (UIU)

**Repository:** https://github.com/NiaztheSage/SAD-LAB-SECTION-B-TEAM-THE-SAGES

**Status:** Draft v0.1 — Initial baseline specification

**Team Members**

| **Student ID** | **Name**            | **Assigned Role**                             |
|----------------|---------------------|-----------------------------------------------|
| 0112330504     | Niaz Morshed        | Project Manager & System Architect            |
| 0112410157     | Sultanul Arefin     | System Analyst & Backend Lead                 |
| 0112410227     | Rukshana Akter Rumi | UI/UX & Frontend Lead                         |
| 0112430222     | Samia Hossain       | QA, Documentation & Clinical Workflow Analyst |

**Revision History**

| **Version** | **Date**   | **Author**                                                        | **Changes**                                                                                                                                   |
|-------------|------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1         | 2026-11-20 | Niaz Morshed, Sultanul Arefin, Rukshana Akter Rumi, Samia Hossain | Initial baseline SRS covering Sections 1–7 and Appendices A–C, including MoSCoW, TELOS, SWOT, and Section 6.4 Revenue & Sustainability Model. |

# 1 Introduction

## 1.1 Purpose

This Software Requirements Specification (SRS) defines all functional and non-functional requirements for NI-ODTCN (National & International Organ Donation and Transplant Coordination Network) — a web-based integrated digital platform connecting hospitals, transplant centres, living and deceased donors, transplant recipients, and medical professionals across national and selected international healthcare networks.

This document serves as the authoritative agreement between the development team (Team: The Sages), the Course Teacher, external evaluators, and future maintainers of the system. It is the primary input for system design (P3), prototype implementation (P4–P6), and acceptance evaluation (P7).

The intended readers of this document are:

- **Development team —** to understand what must be built, role-based access rules, and MoSCoW implementation priorities.

- **Course Teacher and evaluators —** to verify that requirements are complete, consistent, unambiguous, and testable.

- **QA team —** to derive test cases and verification criteria from requirement IDs.

- **Stakeholders and future maintainers —** to understand the operational scope, ethical safeguards, and regulatory constraints of the platform.

## 1.2 Scope

**System name:** National & International Organ Donation and Transplant Coordination Network (NI-ODTCN)

NI-ODTCN is a web-based coordination and clinical decision-support platform that streamlines organ donation registry management, recipient waitlisting, organ-specific compatibility evaluation, deceased donor case workflows, paired kidney exchange cycles, national and cross-border patient referrals, authorized organ retrieval logistics, transplant documentation, and post-transplant follow-up. Important: The system provides administrative coordination and clinical decision-support features only; it shall never independently determine brain death, donor/recipient medical eligibility, or final organ allocation.

**What the system WILL do (Summary):**

- Register and verify national and selected international hospitals along with their transplant capabilities.

- Maintain structured registries for living organ donors and deceased donor intention pledges (with next-of-kin workflows).

- Manage transplant recipient profiles, medical histories, diagnostic reports, and organ requirements (Kidney and Liver in Prototype v1).

- Provide clinical compatibility matching suggestions (ABO, HLA, crossmatch, and organ-specific criteria) and detect paired kidney exchange cycles.

- Coordinate deceased donor identification workflows and track authorized organ retrieval, preservation, and cold-ischemia time logistics.

- Facilitate national and cross-border patient referrals between accredited partner hospitals.

- Record surgical transplant procedures, post-transplant follow-up visits, analytical dashboards, de-identified research datasets, and immutable audit logs.

**Business goals:**

- **G1 —** Centralize donor and recipient coordination across 3 national and 2 international partner hospitals in Prototype v1.

- **G2 —** Reduce compatibility screening and paired kidney exchange cycle identification time by ≥ 50% compared to manual coordination.

- **G3 —** Ensure 100% status traceability for national and cross-border patient referrals and organ preservation logistics.

- **G4 —** Maintain 100% auditability of clinical record access, consent updates, and match sign-offs via immutable role-based logs.

- **G5 —** Establish an ethical, non-organ-commercial sustainability model (detailed in Section 6.4) supporting long-term hospital coordination, referral administration, de-identified research licensing, and institutional partnerships.

## 1.3 Definitions, Acronyms and Abbreviations

| **Term**              | **Meaning**                                                                                                 |
|-----------------------|-------------------------------------------------------------------------------------------------------------|
| NI-ODTCN              | National & International Organ Donation and Transplant Coordination Network.                                |
| Super Admin           | Platform-level administrator managing hospital onboarding, verification, global roles, and monitoring.      |
| Hospital Admin        | Institution-level administrator managing a hospital's profile, medical staff, cases, and referrals.         |
| Medical Professional  | Licensed clinical user (Doctor, Surgeon, ICU Specialist, Lab Specialist, Transplant Coordinator).           |
| Donor                 | Individual registered for living organ donation or deceased organ donation intention.                       |
| Recipient             | Patient registered on the transplant waitlist requiring an organ transplantation.                           |
| ABO / HLA             | Blood group system (ABO) and Human Leukocyte Antigen (HLA) tissue typing used for transplant matching.      |
| PKE                   | Paired Kidney Exchange — exchanging kidneys between incompatible living donor-recipient pairs.              |
| CIT                   | Cold Ischemia Time — duration an organ is preserved in cold solution between retrieval and transplantation. |
| Cross-Border Referral | Patient referral or clinical consultation request between a national and an international hospital.         |
| De-identified Data    | Clinical records stripped of Personally Identifiable Information (PII) for approved research.               |
| MoSCoW                | Must Have / Should Have / Could Have / Won't Have — requirements prioritisation framework.                  |
| TELOS                 | Technical, Economic, Legal, Operational, and Schedule feasibility framework.                                |
| SWOT                  | Strengths, Weaknesses, Opportunities, and Threats strategic analysis framework.                             |
| RBAC                  | Role-Based Access Control — security model restricting actions based on a user's assigned role.             |
| JWT                   | JSON Web Token — stateless signed token used for authenticated REST API sessions.                           |
| **FR / NFR**          | Functional Requirement / Non-Functional Requirement.                                                        |
| RTM                   | Requirements Traceability Matrix — links each requirement to its use case, screen, and test.                |
| RPO / RTO             | Recovery Point Objective (max data loss) and Recovery Time Objective (max downtime).                        |

## 1.4 References

1\. Team: The Sages — NI-ODTCN Project Skeleton & Initial System Blueprint (v1.0), Nov 2026.

2\. IEEE Std 830-1998: IEEE Recommended Practice for Software Requirements Specifications.

3\. ISO/IEC/IEEE 29148:2018: Systems and software engineering — Life cycle processes — Requirements engineering.

4\. National Human Organ Transplantation Act (1999 & 2018 Amendment) — Statutory framework for ethical organ donation.

5\. World Health Organization (WHO): Guiding Principles on Human Cell, Tissue and Organ Transplantation (WHA63.22).

6\. Directorate General of Health Services (DGHS): National Organ Transplant & Clinical Governance Standards.

7\. National Data Protection Guidelines (Draft), 2024.

8\. OWASP Top 10 (2021 edition): https://owasp.org/www-project-top-ten/

9\. UIU CSE 3412 SAD Lab Course Materials & Sample SRS Reference (Rejwan Ahmed, Fall 2026).

## 1.5 Overview

The remainder of this document is organised as follows:

- **Section 2 — Overall Description:** high-level product context, major functions, user classes, operating environment, constraints, and assumptions.

- **Section 3 — External Interface Requirements:** user interface standards, hardware interfaces, external software services, and communication channels.

- **Section 4 — Functional Requirements:** detailed, testable requirements for each feature group in 'The system shall…' form.

- **Section 5 — Non-Functional Requirements:** measurable quality attributes (performance, security, usability, availability, reliability, maintainability) and STRIDE-lite threat analysis.

- **Section 6 — Project Prioritisation & Strategic Feasibility (MoSCoW, TELOS, SWOT & Sustainability):** MoSCoW prioritisation, TELOS feasibility, SWOT analysis, and the platform's ethical revenue & sustainability model (Section 6.4).

- **Section 7 — Other Requirements:** data retention, backup targets, legal/regulatory compliance, data migration, and training requirements.

- **Appendices A, B, and C:** analysis and design models (DFD, Use Cases, Activity, Class, Sequence, State Machine, ERD), RTM, glossary, and AI-use disclosure.

# 2 Overall Description

## 2.1 Product Perspective

NI-ODTCN is a new, independent web-based healthcare coordination product with no direct predecessor. It is a standalone platform that connects national hospitals with accredited international partner hospitals, while interoperating with external notification and storage services:

- SMTP Email Relay and REST SMS Gateway — to deliver account verification codes, deceased donor alerts, and referral status notifications.

- S3-compatible Object Storage — to store encrypted clinical documents (HLA typing reports, lab results, signed consent forms).

- External Regulatory Authority — receives compliance and audit reports as an external stakeholder without direct system write login.

> +---------------+ +------------------------------------+ +------------------+  
> \| Super Admin \|-------\>\| \|\<------\>\| Hospital Admin \|  
> +---------------+ \| \| +------------------+  
> +---------------+ \| NI-ODTCN \| +------------------+  
> \| Donor \|-------\>\| (Organ Donation & Transplant \|\<------\>\| Medical Pro \|  
> +---------------+ \| Coordination Network) \| +------------------+  
> +---------------+ \| \| +------------------+  
> \| Recipient \|\<------\>\| \|-------\>\| Email/SMS & Audit\|  
> +---------------+ +------------------------------------+ +------------------+

## 2.2 Product Functions

The core functional modules of NI-ODTCN are grouped into Major Prototype (P3–P4) and Minor Prototype (P5–P6) deliverables:

**Major Prototype (P3–P4) — Core Baseline:**

| **\#** | **Function**                      | **Description**                                                                                    |
|--------|-----------------------------------|----------------------------------------------------------------------------------------------------|
| **F1** | User Authentication & RBAC        | Secure registration, login, and role-based access control across 5 core user roles.                |
| **F2** | Hospital Network Management       | Registration, verification, and capability profiling of 3 national and 2 international hospitals.  |
| **F3** | Donor & Recipient Management      | Living/deceased donor intention registration and recipient clinical profile & waitlist management. |
| **F4** | Organ-Specific Matching Support   | Clinical compatibility evaluation (ABO, HLA, crossmatch) for Kidney and Liver workflows.           |
| **F5** | Deceased Donor Coordination       | Potential deceased donor identification, consent verification, and multi-hospital coordination.    |
| **F6** | Paired Kidney Exchange (PKE)      | Detection and cycle visualization for incompatible living donor-recipient kidney pairs.            |
| **F7** | National & Cross-Border Referral  | Inter-hospital patient referral requests, medical dossier exchange, and approval tracking.         |
| **F8** | Medical Case & Transplant Records | Clinical report uploads, surgical transplant procedure logging, and post-transplant follow-up.     |

**Minor Prototype (P5–P6) — Extended Capabilities:**

| **\#**  | **Function**                       | **Description**                                                                                        |
|---------|------------------------------------|--------------------------------------------------------------------------------------------------------|
| **F9**  | Organ Logistics Tracking           | Authorized organ retrieval timestamps, preservation method, cold-ischemia timer, and transport status. |
| **F10** | Automated Notification System      | In-app, email, and SMS alerts for match proposals, referrals, consent checks, and follow-ups.          |
| **F11** | National & International Analytics | Role-based visual dashboards showing donation trends, waitlists, referral volumes, and outcomes.       |
| **F12** | De-Identified Research Repository  | Anonymized clinical dataset export and knowledge base managed by Super Admin.                          |
| **F13** | Comprehensive Audit & Security     | Immutable activity logs tracking record views, compatibility overrides, and administrative actions.    |

## 2.3 User Classes and Characteristics

| **User class**       | **Description**                                                                                                                                                                | **Technical skill level** | **Frequency of use**         |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------------------|
| Super Admin          | Platform-level administrator managing hospital onboarding, verification, global user accounts, role permissions, system health, and de-identified research datasets.           | High. Power user.         | Daily                        |
| Hospital Admin       | Authorized administrator for a national or international hospital managing hospital profile, organ capabilities, medical staff accounts, local cases, and referrals.           | Medium to High.           | Daily                        |
| Medical Professional | Licensed Doctor, Surgeon, ICU Specialist, Lab Specialist, or Transplant Coordinator performing clinical assessments, compatibility reviews, referrals, and transplant logging. | Medium to High.           | Daily / shift-based          |
| Donor                | Registered living donor or deceased-donation pledger (or authorized next-of-kin) managing personal profile, organ pledge, consent status, and evaluation progress.             | Low to Medium.            | Occasional / milestone-based |
| Recipient            | Transplant candidate managing clinical history, medical reports, hospital selection, matching status, national/international referral tracking, and follow-up records.         | Low to Medium.            | Weekly / milestone-based     |

## 2.4 Operating Environment

| **Layer**              | **Technology / Specification**                                                                                   |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Client Web Application | Responsive Web SPA — Chrome 115+, Edge 115+, Firefox 118+, Safari 16+ (Minimum desktop viewport: 1280 × 800 px). |
| **Front-End Stack**    | HTML5, CSS3, Bootstrap 5 / React.js with responsive layouts.                                                     |
| Back-End API           | Python 3.11+ with FastAPI (or Node.js 20 LTS / Express.js) exposing RESTful JSON APIs over HTTPS.                |
| Database               | MySQL 8.0 / PostgreSQL 15 relational database; Redis 7 for session token blocklist and alert timers.             |
| **File Storage**       | S3-compatible Object Storage with AES-256 encryption at rest for uploaded clinical reports.                      |
| Notification Services  | SMTP Email Relay and REST SMS Gateway API.                                                                       |
| Minimum Network        | Donor/Recipient device: 3G / 500 kbps. Hospital/Clinical workstation: 4G / Broadband ≥ 2 Mbps.                   |

## 2.5 Design and Implementation Constraints

- Clinical decision-support boundary: The system provides coordination and decision-support only; it shall never autonomously certify brain death, medical eligibility, or final organ allocation.

- Legal and ethical compliance: All workflows must adhere to the Human Organ Transplantation Act and WHO Guiding Principles, prohibiting commercial organ transactions.

- Prototype v1 scope: Restricted to 3 fictional national hospitals, 2 fictional international hospitals, 5 core roles, Kidney and Liver workflows, and synthetic/demo data.

- Data privacy: All PII and clinical records must be transmitted over TLS 1.2+ and encrypted at rest using AES-256.

- Budget: BDT 0 — academic project using open-source technologies and free hosting tiers.

## 2.6 Assumptions and Dependencies

**Assumptions:**

- A1 — Hospital credentials and medical licenses are verified off-platform by Super Admin prior to activating hospital accounts.

- A2 — Medical professionals entering ABO, HLA, and crossmatch metrics are duly credentialed by their respective Hospital Admin.

- A3 — Prototype v1 uses synthetic/anonymized demo records only; no real patient PII/PHI is ingested during academic testing.

- A4 — Users have standard internet connectivity during active web sessions.

**Dependencies:**

- D1 — SMTP email sandbox/relay must be configured prior to FR-AUTH and FR-REF notification testing.

- D2 — Charting/graph visualization library (e.g., Chart.js / Recharts) must be integrated for analytics dashboards and Paired Kidney Exchange cycle views.

- D3 — PDF generation library (e.g., ReportLab / WeasyPrint) must be available for exporting referral dossiers and transplant records.

