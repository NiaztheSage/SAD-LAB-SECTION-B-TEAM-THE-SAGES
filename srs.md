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

# 3 External Interface Requirements

## 3.1 User Interfaces

| **Screen**                       | **User(s)**                            | **Key design requirements**                                                                                                  |
|----------------------------------|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Landing & Role Portal            | All Users                              | Platform overview, donor pledge CTA, partner hospital directory, and unified Login / Registration entry.                     |
| Donor & Recipient Registration   | Donor, Recipient                       | Multi-step form capturing demographics, blood group, organ pledge/requirement, consent checkboxes, and medical summary.      |
| Super Admin Dashboard            | Super Admin                            | Global statistics, pending hospital verification queue, user/role management table, system status, and audit log viewer.     |
| Hospital Admin Dashboard         | Hospital Admin                         | Hospital profile editor, organ capability matrix, medical staff roster, incoming/outgoing referral queue, and local metrics. |
| Clinical Assessment Workspace    | Medical Professional                   | Clinical view displaying donor/recipient lab reports, ABO/HLA compatibility indicators, and eligibility sign-off forms.      |
| Matching & PKE Visualizer        | Medical Professional                   | Ranked compatible candidate list with match scores and cycle graph for Paired Kidney Exchange (2-way/3-way cycles).          |
| Deceased Donor & Logistics Board | Medical Professional                   | Time-critical workflow tracker for deceased donors, retrieval checklist, preservation method, and Cold Ischemia Time timer.  |
| Cross-Border Referral Portal     | Hospital Admin, Medical Pro, Recipient | Structured referral request form, attached clinical dossier viewer, inter-hospital messaging, and status tracker.            |
| Transplant & Follow-Up Log       | Medical Professional, Recipient        | Surgical procedure record form and longitudinal post-transplant follow-up timeline.                                          |
| Analytics & Research Repository  | Super Admin, Medical Pro               | Filterable national vs. international transplant statistics and de-identified dataset query/download interface.              |

**UI standards applying to all screens:**

- All interactive elements shall meet WCAG 2.1 Level AA colour contrast (≥ 4.5:1 for body text).

- Error messages shall appear inline next to the invalid form field.

- Clinically sensitive actions (rejecting a referral, revoking consent, suspending an account) shall require a confirmation modal with a mandatory reason.

## 3.2 Hardware Interfaces

NI-ODTCN is a web-based software platform requiring no specialized medical peripherals or hardware interfaces in Prototype v1. Standard desktop, laptop, tablet, or smartphone hardware with standard input devices and network connectivity is sufficient.

## 3.3 Software Interfaces

| **External service**      | **Version / Protocol** | **Purpose**                               | **Data exchanged**                                                                 |
|---------------------------|------------------------|-------------------------------------------|------------------------------------------------------------------------------------|
| MySQL 8.0 / PostgreSQL 15 | TCP/IP (3306 / 5432)   | Primary relational data store.            | Users, hospitals, donors, recipients, matches, referrals, transplants, audit logs. |
| Redis                     | v7 · TCP/IP (6379)     | Session token blocklist and alert timers. | Revoked JWT IDs, rate-limit counters, CIT alert states.                            |
| Object Storage (S3)       | HTTPS / REST           | Encrypted clinical document storage.      | PDF/JPEG lab reports, imaging summaries, consent forms.                            |
| SMTP / SMS Gateway        | TLS / HTTPS REST       | Email and SMS alert delivery.             | Verification links/OTPs, referral alerts, deceased-donor notifications.            |
| PDF & Charting SDKs       | Internal libraries     | Document export and data visualization.   | Referral summary PDFs, transplant records, analytics charts.                       |

## 3.4 Communication Interfaces

- HTTPS (TLS 1.2 minimum): All client–server communication uses HTTPS; HTTP requests redirect automatically to HTTPS.

- REST / JSON: Back-end APIs exchange UTF-8 encoded JSON payloads using standard HTTP status codes.

- JWT Bearer Authentication: Protected API requests authenticate via signed JWT tokens in the Authorization header.

- Multipart File Upload: Clinical documents transfer over HTTPS multipart/form-data with MIME-type and 10 MB size validation.

# 4 Functional Requirements

## 4.1 Authentication & Role-Based Access Control (FR-AUTH) — Must

| **ID**         | **Requirement**                                                                                                                                                                            | **Priority** | **Source**                    |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------------|
| **FR-AUTH-01** | The system shall allow prospective Donors and Recipients to register an account by providing a valid email address, mobile number, full name, and password (minimum 8 characters).         | Must         | Ref \[1\] Sec 3.01, 4         |
| **FR-AUTH-02** | The system shall verify newly registered user email addresses via a verification token or 6-digit OTP expiring within 15 minutes before activating login access.                           | Must         | Ref \[1\] Sec 3.01            |
| **FR-AUTH-03** | The system shall authenticate registered users via email and password and issue a signed JWT access token (valid for 12 hours) encoding user ID and core role.                             | Must         | Ref \[1\] Sec 4               |
| **FR-AUTH-04** | The system shall enforce Role-Based Access Control (RBAC) on all API routes, restricting access strictly to Super Admin, Hospital Admin, Medical Professional, Donor, and Recipient roles. | Must         | Ref \[1\] Sec 4               |
| **FR-AUTH-05** | The system shall lock a user account for 30 minutes after 5 consecutive failed login attempts within a 15-minute window and log the event.                                                 | Must         | OWASP A07, Ref \[1\] Sec 3.16 |
| **FR-AUTH-06** | The system shall invalidate the active session token immediately when a user logs out.                                                                                                     | Must         | Ref \[1\] Sec 3.16            |

## 4.2 Hospital Network & Administration (FR-HOSP) — Must

| **ID**         | **Requirement**                                                                                                                                                                                                                    | **Priority** | **Source**              |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------|
| **FR-HOSP-01** | The system shall allow a Super Admin to register a National or International Hospital by recording hospital name, country, city, accreditation ID, contact details, and designated Hospital Admin.                                 | Must         | Ref \[1\] Sec 3.02, 5.1 |
| **FR-HOSP-02** | The system shall maintain a hospital verification status ('Pending Verification', 'Verified', 'Suspended') and prevent unverified hospitals from participating in matching or referrals.                                           | Must         | Ref \[1\] Sec 5.1       |
| **FR-HOSP-03** | The system shall allow a verified Hospital Admin to configure their hospital's organ-specific transplant capabilities (Kidney, Liver) and surgical readiness status.                                                               | Must         | Ref \[1\] Sec 5.2       |
| **FR-HOSP-04** | The system shall allow a Hospital Admin to create, verify, and deactivate Medical Professional accounts under their institution with assigned specialty (Doctor, Surgeon, ICU Specialist, Lab Specialist, Transplant Coordinator). | Must         | Ref \[1\] Sec 5.2, 5.3  |
| **FR-HOSP-05** | The system shall allow a Super Admin to activate, suspend, or modify permissions of any user account on the platform.                                                                                                              | Must         | Ref \[1\] Sec 5.1       |

## 4.3 Donor & Recipient Registry Management (FR-REG) — Must

| **ID**        | **Requirement**                                                                                                                                                                                                        | **Priority** | **Source**              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------|
| **FR-REG-01** | The system shall allow an authenticated Donor to create and update a donor profile specifying donation type ('Living Donor' or 'Deceased Donor Intention'), blood group (ABO/Rh), age, location, and pledged organ(s). | Must         | Ref \[1\] Sec 3.03, 5.4 |
| **FR-REG-02** | The system shall require a Donor to record informed consent status and designate an authorized next-of-kin representative for deceased donation intention pledges.                                                     | Must         | Ref \[1\] Sec 5.4       |
| **FR-REG-03** | The system shall display a mandatory disclaimer stating that donor registration does not automatically certify medical eligibility or replace statutory legal consent.                                                 | Must         | Ref \[1\] Sec 5.4       |
| **FR-REG-04** | The system shall allow an authenticated Recipient to register a transplant profile specifying required organ (Kidney or Liver in Prototype v1), blood group, urgency level, medical history, and preferred hospital.   | Must         | Ref \[1\] Sec 3.04, 5.5 |
| **FR-REG-05** | The system shall allow Donors and Recipients to upload supporting medical reports (PDF, JPEG, PNG up to 10 MB) and view their verification and evaluation status.                                                      | Must         | Ref \[1\] Sec 5.4, 5.5  |
| **FR-REG-06** | The system shall allow a Hospital Admin or assigned Medical Professional to verify donor/recipient records and update evaluation status ('Submitted', 'Under Review', 'Clinically Cleared', 'Ineligible').             | Must         | Ref \[1\] Sec 5.2, 5.3  |

## 4.4 Clinical Compatibility Matching & Paired Kidney Exchange (FR-MATCH) — Must

| **ID**          | **Requirement**                                                                                                                                                                                                 | **Priority** | **Source**              |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------|
| **FR-MATCH-01** | The system shall allow an authorized Medical Professional to record clinical assessment parameters for donors and recipients, including ABO blood group, HLA antigens, crossmatch result, and organ biomarkers. | Must         | Ref \[1\] Sec 3.09, 5.3 |
| **FR-MATCH-02** | The system shall generate ranked donor-recipient compatibility suggestions for Kidney and Liver cases based on ABO compatibility, HLA match score, crossmatch status, and clinical urgency.                     | Must         | Ref \[1\] Sec 3.05, 5.3 |
| **FR-MATCH-03** | The system shall label all generated matches as 'Decision-Support Suggestions' and require explicit sign-off by an authorized Medical Professional before transplant coordination.                              | Must         | Ref \[1\] Sec 2, 5.3    |
| **FR-MATCH-04** | The system shall identify incompatible living kidney donor-recipient pairs and detect valid 2-way or 3-way Paired Kidney Exchange (PKE) cycles.                                                                 | Must         | Ref \[1\] Sec 3.07, 5.3 |
| **FR-MATCH-05** | The system shall display detected PKE exchange cycles visually to authorized Transplant Coordinators and allow them to propose or reject a cycle for clinical review.                                           | Should       | Ref \[1\] Sec 5.3, 8    |

## 4.5 Deceased Donor Coordination & Organ Logistics (FR-DECEASED) — Must

| **ID**        | **Requirement**                                                                                                                                                                                             | **Priority** | **Source**               |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------------------------|
| **FR-DEC-01** | The system shall allow an ICU Specialist or Transplant Coordinator to initiate a Potential Deceased Donor case, recording external brain-death certification reference ID, ICU hospital, and viable organs. | Must         | Ref \[1\] Sec 3.06, 5.3  |
| **FR-DEC-02** | The system shall record family/next-of-kin authorization confirmation before enabling organ matching suggestions for a deceased donor case.                                                                 | Must         | Ref \[1\] Sec 3.06, 5.4  |
| **FR-DEC-03** | The system shall track authorized organ retrieval and transportation milestones, including retrieval timestamp, preservation method, destination hospital, and elapsed Cold Ischemia Time (CIT).            | Should       | Ref \[1\] Sec 3.10       |
| **FR-DEC-04** | The system shall trigger a high-priority warning alert when elapsed Cold Ischemia Time reaches 75% of the organ's safe preservation limit.                                                                  | Should       | Ref \[1\] Sec 3.10, 3.13 |

## 4.6 National & International Patient Referral (FR-REF) — Must

| **ID**        | **Requirement**                                                                                                                                                                                                       | **Priority** | **Source**                 |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|----------------------------|
| **FR-REF-01** | The system shall allow a Recipient or treating Medical Professional to submit a referral request from a source hospital to a target National or International partner hospital with clinical justification.           | Must         | Ref \[1\] Sec 3.08, 5.5, 6 |
| **FR-REF-02** | The system shall package the patient's authorized medical history and diagnostic reports into a structured referral dossier accessible to the receiving Hospital Admin and Medical Professionals.                     | Must         | Ref \[1\] Sec 6            |
| **FR-REF-03** | The system shall allow the receiving Hospital Admin or Medical Professional to update referral status ('Submitted', 'Under Clinical Review', 'Accepted', 'Additional Info Required', 'Declined') with clinical notes. | Must         | Ref \[1\] Sec 5.2, 5.3     |
| **FR-REF-04** | The system shall allow both the referring hospital and the Recipient to track real-time referral progress and exchange structured clinical clarification messages.                                                    | Must         | Ref \[1\] Sec 5.5, 6       |

## 4.7 Transplant Procedure & Post-Transplant Follow-Up (FR-TRANS) — Must

| **ID**          | **Requirement**                                                                                                                                                                                                        | **Priority** | **Source**              |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------|
| **FR-TRANS-01** | The system shall allow an authorized Surgeon or Transplant Coordinator to record a completed transplant procedure, capturing donor ID, recipient ID, organ type, hospital, surgical team, procedure date, and outcome. | Must         | Ref \[1\] Sec 3.11, 5.3 |
| **FR-TRANS-02** | The system shall automatically update matched Donor and Recipient case statuses to 'Transplanted' upon finalization of the transplant record.                                                                          | Must         | Ref \[1\] Sec 3.11      |
| **FR-TRANS-03** | The system shall allow Medical Professionals to schedule and log post-transplant follow-up visits for living donors and recipients, recording clinical vitals, graft function markers, and medication notes.           | Must         | Ref \[1\] Sec 3.12, 5.3 |
| **FR-TRANS-04** | The system shall allow Donors and Recipients to view their post-transplant follow-up history and upcoming appointment reminders.                                                                                       | Should       | Ref \[1\] Sec 5.4, 5.5  |

## 4.8 Analytics, Research Repository & Audit Logs (FR-ADMIN) — Must

| **ID**          | **Requirement**                                                                                                                                                                             | **Priority** | **Source**              |
|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------------------|
| **FR-ADMIN-01** | The system shall provide role-scoped analytical dashboards displaying donor registrations, active recipients by organ, matching rates, cross-border referrals, and transplant outcomes.     | Must         | Ref \[1\] Sec 3.14, 5.1 |
| **FR-ADMIN-02** | The system shall allow a Super Admin to generate and publish de-identified clinical datasets (stripped of all PII) to the Research Repository for authorized clinical users.                | Should       | Ref \[1\] Sec 3.15, 5.1 |
| **FR-ADMIN-03** | The system shall maintain an immutable audit log recording timestamp (UTC), actor user ID, role, action performed, target entity ID, and IP address for all record views and modifications. | Must         | Ref \[1\] Sec 3.16, 5.1 |
| **FR-ADMIN-04** | The system shall prohibit any user role, including Super Admin, from editing or deleting entries in the audit log table. 

# 5 Non-Functional Requirements

| **ID**          | **Category**    | **Requirement**                                                                                                                                                                        |
|-----------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **NFR-PERF-01** | Performance     | Dashboard, registry search, and referral pages shall load within 2.0 seconds for 95% of requests under a simulated load of 150 concurrent users.                                       |
| **NFR-PERF-02** | Performance     | Organ compatibility matching and Paired Kidney Exchange cycle queries shall complete within 3.0 seconds for a prototype dataset of up to 1,000 records.                                |
| **NFR-SEC-01**  | Security        | All passwords shall be hashed using bcrypt or Argon2id (minimum work factor 12); plaintext passwords shall never be stored or logged.                                                  |
| **NFR-SEC-02**  | Security        | All medical files and PII/PHI stored in databases and object storage shall be encrypted at rest using AES-256 and transmitted over TLS 1.2+.                                           |
| **NFR-SEC-03**  | Security        | Every API endpoint accessing donor, recipient, or referral clinical records shall enforce server-side RBAC and hospital-scope verification, returning HTTP 403 on unauthorized access. |
| **NFR-SEC-04**  | Security        | De-identified research exports (FR-ADMIN-02) shall strip 100% of direct identifiers (name, NID/passport, phone, email, address) prior to export.                                       |
| **NFR-USE-01**  | Usability       | A first-time Donor or Recipient shall be able to complete registration and submit an initial pledge or organ request within 5 minutes without assistance.                              |
| **NFR-USE-02**  | Usability       | All UI views shall achieve WCAG 2.1 Level AA colour contrast (≥ 4.5:1) and remain usable across 360 px mobile to 1920 px desktop viewports.                                            |
| **NFR-AVL-01**  | Availability    | The platform shall achieve ≥ 99.0% uptime during lab evaluation hours (Sat–Thu, 08:00–22:00 BST).                                                                                      |
| **NFR-REL-01**  | Reliability     | All transplant matching, referral status updates, and audit log writes shall execute within atomic database transactions to prevent partial state updates.                             |
| **NFR-MNT-01**  | Maintainability | Back-end REST endpoints shall be documented in an OpenAPI 3.0 specification and maintain ≥ 70% unit/integration test coverage.                                                         |

## 5.1 Security and Privacy — STRIDE-lite Analysis

| **Use case**                   | **Threat type (STRIDE)** | **Threat description**                                                                                          | **Mitigation**                                                                                            | **Req ID**                                      |
|--------------------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| User Login & Role Session      | Spoofing                 | Attacker performs credential stuffing or token forgery to impersonate a Medical Professional or Hospital Admin. | Enforce bcrypt hashing, 30-min lockout after 5 failed attempts, signed JWTs, and email verification.      | FR-AUTH-02, FR-AUTH-05, NFR-SEC-01              |
| Compatibility & Match Override | Tampering                | Unauthorized modification of ABO/HLA values or match scores via manipulated API payloads.                       | TLS 1.2+ encryption, server-side schema validation, role-restricted writes, and audit logging.            | FR-MATCH-01, FR-ADMIN-03, NFR-SEC-02            |
| Clinical Sign-Off & Referral   | Repudiation              | A clinician or Hospital Admin denies approving a match suggestion or declining a referral.                      | Bind every sign-off and status update to authenticated user ID and UTC timestamp in immutable audit logs. | FR-MATCH-03, FR-REF-03, FR-ADMIN-04             |
| Donor & Recipient Dossiers     | Information disclosure   | A user from Hospital A queries records belonging to Hospital B or accesses raw PII in research exports.         | Hospital-scoped RBAC middleware on clinical routes and mandatory PII stripping in research repository.    | FR-AUTH-04, FR-ADMIN-02, NFR-SEC-03, NFR-SEC-04 |
| Deceased Donor Matching API    | Denial of service        | Automated request floods degrade matching endpoints during a time-critical deceased donor workflow.             | Redis-backed API rate limiting per user/IP and database indexing on ABO/HLA matching columns.             | NFR-PERF-02, NFR-AVL-01                         |
| Admin Verification Endpoints   | Elevation of privilege   | A Donor, Recipient, or staff user calls /admin/hospitals/verify directly via crafted API requests.              | RBAC middleware verifying JWT role claims on all administrative routes; return HTTP 403 and log attempt.  | FR-AUTH-04, FR-HOSP-02, NFR-SEC-03              |

# 6 Project Prioritisation & Strategic Feasibility (MoSCoW, TELOS, SWOT & Sustainability)

## 6.1 MoSCoW Prioritisation Matrix

To manage project scope effectively across the P3–P7 lab milestones and prevent scope creep, all NI-ODTCN features are categorised using the MoSCoW prioritisation method:

| **Priority Category** | **Definition** | **NI-ODTCN Scope Items** |
| --- | --- | --- |
| **Must Have** | Critical core features required for a viable, safe, and clinically verifiable Prototype v1 (P3–P4 baseline). | • Role-based authentication & 5-role RBAC (Super Admin, Hospital Admin, Medical Pro, Donor, Recipient)<br>• National & International Hospital registration and verification (3 national + 2 international)<br>• Living & deceased donor intention registration with informed consent & next-of-kin details<br>• Recipient waitlist registration for Kidney and Liver with medical report uploads<br>• ABO/HLA/Crossmatch clinical compatibility engine with mandatory physician sign-off<br>• 2-way and 3-way Paired Kidney Exchange (PKE) cycle detection<br>• Deceased donor case initiation with external brain-death certification ID & family consent gate<br>• National & Cross-Border patient referral workflow with dossier sharing and status tracking<br>• Surgical transplant procedure logging, post-transplant follow-up records, and immutable audit logs |
| **Should Have** | Important operational and analytical features targeted for P5–P6 integration that significantly enhance clinical coordination. | • Organ retrieval & transportation logistics tracking with Cold Ischemia Time (CIT) 75% threshold alerts<br>• Interactive PKE cycle graph visualization and proposal/rejection workflow for Transplant Coordinators<br>• Automated multi-channel alerts (Email & SMS) for referrals, match reviews, and follow-up schedules<br>• Role-scoped analytical dashboards (national vs. international donation, waitlist, and outcome metrics)<br>• De-identified clinical dataset export repository managed by Super Admin |
| **Could Have** | Desirable usability and reporting enhancements implemented if schedule capacity permits prior to P7 defence. | • Downloadable PDF clinical referral dossiers and post-transplant discharge summaries<br>• Advanced multi-parameter filtering on hospital capability directories and research datasets<br>• Bilingual interface toggle (English / Bangla) for Donor and Recipient self-service portals |
| **Won't Have** | Explicitly excluded from Prototype v1 scope to maintain legal, clinical, and schedule boundaries. | • Autonomous brain-death determination, clinical eligibility certification, or automated organ allocation<br>• Live integration with national civil NID registries, customs clearance, or physical courier APIs<br>• Financial billing, payment gateways, or commercial organ compensation modules<br>• Matching workflows for Cornea, Heart, Lung, Pancreas, or Bone Marrow in Prototype v1<br>• Offline-first native mobile apps or real-time wearable IoT telemetry |

## 6.2 TELOS Feasibility Analysis

A structured TELOS feasibility assessment was conducted by Team: The Sages to validate that NI-ODTCN can be designed, built, and demonstrated reliably within the academic and regulatory constraints of CSE 3412:

| **Dimension**   | **Rating**                 | **Feasibility Assessment for NI-ODTCN**                                                                                                                                                                                                                                                                                                                                       |
|-----------------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Technical**   | Feasible (High)            | The platform uses mature, well-supported technologies (Python/FastAPI or Node.js/Express, MySQL/PostgreSQL, Redis, Bootstrap/React). Graph-based cycle detection (DFS/Tarjan's algorithm) for 2-way/3-way Paired Kidney Exchange and RBAC middleware are well within the team's software engineering capabilities.                                                            |
| **Economic**    | Feasible (High)            | Academic prototype cost is BDT 0 using open-source tools and free tiers. For post-academic operational sustainability without any organ commercialization, NI-ODTCN aligns with the ethical revenue streams defined in Section 6.4 (hospital network subscriptions, referral coordination administration, de-identified research/analytics access, and institutional grants). |
| **Legal**       | Feasible (With Guardrails) | Organ transplantation is strictly governed by national organ transplant laws and WHO Guiding Principles against organ trafficking. NI-ODTCN mitigates legal risk by operating strictly as a hospital-verified coordination and decision-support platform, requiring mandatory consent disclaimers, prohibiting financial exchange, and using only synthetic data in v1.       |
| **Operational** | Feasible (High)            | The system mirrors real-world clinical workflows across 5 distinct user roles without replacing human medical judgment. Role-specific dashboards, clear status lifecycles, and confirmation modals ensure hospital administrators and clinicians can adopt the workflow with minimal training.                                                                                |
| **Schedule**    | Feasible (Moderate–High)   | Dividing delivery into Major Prototype (P3–P4: core registries, matching, PKE, referrals) and Minor Prototype (P5–P6: CIT logistics, analytics, de-identified research export) across 4 dedicated team members aligns directly with the Fall 2026 lab milestones leading to P7 defence.                                                                                       |

## 6.3 SWOT Analysis

The SWOT matrix below evaluates the internal capabilities and external strategic factors influencing the design and adoption of NI-ODTCN:

| **Quadrant** | **Key Strategic Factors** |
| --- | --- |
| **Strengths** | • Unified end-to-end coordination linking living/deceased registries, PKE cycle discovery, cross-border referrals, and post-transplant follow-up in one system.<br>• Strict clinical decision-support boundary ensuring licensed doctors retain final authority.<br>• Strong security architecture featuring hospital-scoped RBAC, AES-256 encryption, and immutable audit trails. |
| **Weaknesses** | • Prototype v1 relies on synthetic datasets and manual off-platform verification of hospital/physician credentials rather than live regulatory APIs.<br>• Initial scope covers Kidney and Liver workflows only, requiring schema extension for multi-organ support.<br>• Dependent on reliable internet connectivity at participating clinical workstations. |
| **Opportunities** | • Significant potential to increase living kidney transplant rates through automated 2-way and 3-way Paired Kidney Exchange (PKE) matching.<br>• Streamlines complex international medical referrals with standardized, portable clinical dossiers.<br>• De-identified research repository can support longitudinal transplant outcome studies and public health policy. |
| **Threats** | • Strict healthcare data privacy regulations and cross-border medical data transfer restrictions require rigorous governance.<br>• Potential user resistance or workflow friction if hospital staff perceive digital logging as extra administrative overhead.<br>• High sensitivity of medical data makes the platform a target for unauthorized access attempts, requiring continuous security hardening. |

## 6.4 Revenue & Sustainability Model

Because NI-ODTCN operates within strict statutory and ethical boundaries governing organ donation and transplantation, the platform strictly prohibits any commission, fee, or commercial transaction tied to organs, donor pledges, or organ allocation. Instead, financial sustainability is achieved through coordination software services, institutional partnerships, and de-identified research licensing:

- **1. B2B Hospital Network Subscriptions —** Partner hospitals (national and international) pay a tiered monthly or annual platform subscription for multi-user clinical workspaces, compatibility decision-support tools, PKE cycle review workflows, and audit-ready coordination logs.

- **2. National & Cross-Border Referral Coordination Fees —** A flat administrative coordination fee may be charged to participating hospitals or referral coordinators for processing structured clinical dossiers, inter-hospital case routing, and cross-border referral tracking — strictly separated from medical treatment and never priced by organ.

- **3. De-Identified Research & Analytics Licensing —** Academic institutions, medical research centres, and public health bodies may obtain licensed access to de-identified clinical datasets (generated via FR-ADMIN-02 with 100% of PII stripped) and aggregated transplant analytics reports (FR-ADMIN-01) for approved longitudinal research.

- **4. Institutional Grants & Public-Health Partnerships —** Public health ministries, healthcare foundations, and institutional partners may fund registry infrastructure pilots, governance reporting, and multi-hospital transplant coordination initiatives.

# 7 Other Requirements

## 7.1 Data Retention

- Active donor registries, recipient waitlists, surgical transplant records, and follow-up records shall be retained throughout active clinical care and archived for at least 10 years.

- Immutable audit logs (FR-ADMIN-03) shall be retained for a minimum of 5 years and shall not be deletable by any role.

- Upon donor or recipient account deletion, personal identifiers shall be anonymised within 30 days while retaining de-identified outcome records for statistical audit.

## 7.2 Backup and Recovery

- Daily incremental backups and weekly full backups of the relational database stored in encrypted object storage.

- Object storage versioning enabled for uploaded medical documents.

- Recovery Point Objective (RPO): ≤ 24 hours; Recovery Time Objective (RTO): ≤ 4 hours.

## 7.3 Legal and Regulatory Compliance

- Registrants must actively accept the Privacy Policy, Ethical Organ Donation Charter, and Medical Disclaimer via unticked checkboxes before account creation.

- System workflows shall enforce non-commercial organ donation rules under the Human Organ Transplantation Act and WHO Guiding Principles.

- Cross-border referrals shall exchange clinical dossiers strictly between accredited hospitals and shall not automate physical organ transport.

## 7.4 Data Migration

Not applicable to v0.1 / v1.0. This is a new platform with no predecessor system. Initial demonstrations will use synthetic datasets representing 3 national hospitals and 2 international hospitals.

## 7.5 Training Requirements

| **User class**       | **Training method**                                                                                    | **Timing**                  |
|----------------------|--------------------------------------------------------------------------------------------------------|-----------------------------|
| Super Admin          | System governance manual + 30-minute walkthrough with the development team.                            | Prior to P3 / P7 evaluation |
| Hospital Admin       | In-app onboarding checklist + 2-page PDF guide on hospital setup, staff accounts, and referral review. | At hospital activation      |
| Medical Professional | Guided in-app tooltips for compatibility evaluation, PKE cycle graph, and deceased donor workflow.     | At first clinical login     |
| Donor & Recipient    | 3-step in-app onboarding guide explaining consent disclaimers, report uploads, and referral tracking.  | At initial registration     |
| Must         | Ref \[1\] Sec 3.16      |
