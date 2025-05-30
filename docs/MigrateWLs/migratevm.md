# Migrating the VM

Once the Migration plan has started, it will first validated against the environment.

1. Verify Plan Validation in the Status section

     ![](./img/val.png)

2. Once validation succeeds, the status changes to **In Progress**. Click **In Progress** to 
monitor the status.

     ![](./img/inP.png)

3. You can monitor the **Migration Status** and **Details** on this page. This should take 
about 5-10 minutes. A perfect time to get a cup of ☕.
For curious minds, during this step, Move is preparing the source VM for transfer 
by doing tasks like installing Nutanix VirtIO drivers and doing data seeding on the target cluster.

     ![](./img/3a.png)

     ![](./img/3b.png)

4. Once the data seeding is complete, the status becomes **Ready To Cutover**. 
It also gives an estimate for cutover time so you can plan the actual cutover.

      ![](./img/4.png)

    If you are on the main page of Move, a blue dot means it is ready for cutover.

    ![](./img/4b.png)

5. To perform the cutover, Select the VM and Click **Cutover**. Click **Continue** to confirm.

     ![](./img/5.png)

6. You can monitor the cutover in **Migration Status** and **Details**.

     ![](./img/6.png)

7. Once the cutover is complete, **Status** will say Completed and **Details** will provide a link 
to View Target VM.
   **DO NOT CLICK ON View Target VM**. This will take you to Prism Element but we will log back 
into Prism Central.

     ![](./img/7.png)

8. Login to Prism Central

    - **username** - PC login will be adminuser##@ntnxlab.local or adminuser##
    - **password** - PC password from Connection Details

9. Navigate to **Compute & Storage** > **VMs**

     ![](./img/9.png)

10. Look for your migrated VM in the main page or you can search in the search 
bar. Make a note of your VMs IP address.

      ![](./img/10.png)

11. You will be using the IP address of your migrated VM to connect to a code-server via the browser in the Parallels VDI environment.

    site_url: http(s)://vmIP:8001

    ![](./img/11.png)

12. You will then be able to log into the code-server with the following:

    - password - Lookup Cluster Sheet
    

    !!! note
        All users will use the password regardless of what other passwords you've previously used.
    
    You will then be able to access the terminal.
    
    ![](./img/12.png)

13. In the console window, type the "ls" command and verify the file is present.

    ![](./img/13.png)

**CONGRATULATIONS!!** You just completed a seamless move of your VM from ESXi to AHV 
in a few clicks.

Next, if you have time, let's perform another migration with Move and explore 
several of the advanced functions that Move offers. Your instructor can help you 
determine which steps to take next.

    