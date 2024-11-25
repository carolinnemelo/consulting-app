# **Big Picture**

## **Core Features**

### **Consultant Page**
- Create a consultant profile with the following fields:
  - Name
  - Email
  - Skills
  - Experience
- View a dynamically generated CV preview.
- Submit updates for admin review.
- Track profile status: Pending, Approved, or Rejected.

### **Admin Dashboard**
- View a list of consultant profiles:
  - Pending approval.
  - Approved profiles.
- Approve or reject submitted profiles.
- Notify consultants about profile status changes (e.g., Approved or Rejected).
- Track statistics:
  - Total consultants.
  - Approved/rejected percentages.

---

## **Tables**

### **Consultants**
- Stores the finalized, approved consultant profiles.
- **Fields**:
  - `Id`: Unique identifier.
  - `Name`: Consultant's name.
  - `Email`: Consultant's email.
  - `Skills`: List of skills.
  - `Experience`: Consultant's professional experience.
  - `Status`: Approved.

### **Update Consultant**
- Stores profiles awaiting admin review or rejected profiles.
- **Fields**:
  - `Id`: Unique identifier.
  - `Consultant_Id`: Reference to the consultant.
  - `Profile_Details`: Collected data for profile creation.
  - `Status`: Pending or Rejected.
