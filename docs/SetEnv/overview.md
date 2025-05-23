
# Nutanix Category Overview


Nutanix Categories are a feature within the Nutanix Prism management interface that allows administrators to organize and manage VMs (Virtual Machines) and other entities based on custom-defined labels or tags. These categories help in streamlining operations, enforcing policies, and simplifying management in a Nutanix environment.

**Key Features of Nutanix Categories:**

- **Custom Labels**: Administrators can create custom categories and assign values to them. For example, you could create a category called "Environment" with values like "Production," "Development," and "Testing."

- **Entity Organization**: Categories can be applied to various entities such as VMs, storage containers, and applications, making it easier to group and manage resources.

- **Policy Enforcement**: Categories can be used to enforce policies, such as backup schedules, security settings, or resource allocation, based on the assigned labels.

- **Search and Filter**: Categories make it easier to search and filter entities within the Nutanix Prism interface, improving visibility and management efficiency.

**Common Uses of Nutanix Categories:**

- **Resource Management**: Group VMs and other resources by department, project, or environment (e.g., Production, Development) to allocate resources more effectively.

- **Automation**: Use categories to automate tasks like backups, snapshots, or power management based on specific criteria.

- **Compliance and Governance**: Enforce compliance by tagging resources with categories like "HIPAA-Compliant" or "PCI-DSS" to ensure they meet regulatory requirements.

- **Cost Tracking**: Assign categories to track costs by department, project, or application for better financial management.

- **Security**: Apply security policies based on categories, such as restricting access to certain VMs or enforcing encryption for specific workloads.

In this section you'll configure categories, policies, and playbooks to prepare for migration. Your migrated VMs will take advantage of these configurations as soon as they spin up on the Nutanix Cloud Platform in later steps.

## Environment Setup

!!! note "Info"
   
    - Prequisities:N/A
    - Expected Module Duration: 15 minutes
