# Clusters Setup

Prior to any DR setup, you will need to prepare the clusters:

- To enable Disaster Recovery
- Connecting both source and target clusters in a new Availability Zone.

!!! note
    
    The following steps have already been performed by the instructor, as enabling Disaster 
    Recovery and configuring the Availability Zone are one-time operations per Prism Central instance.

## Enable Disaster Recovery

1.  Login to source Prism Central.

2.  At the bottom of the left panel, click on **Prism Central Settings**. A blade on the left will display
    the settings.

    ![](./img/dr2.png)

3. Under **Settings**, look for **Setup** and **Enable Disaster Recovery**. Click on it.

    ![](./img/dr3.png)

4. Ensure the **Prechecks successfully** has a green tick beside it and on the **Enable** button,
   click twice to turn on Nutanix Disaster Recovery. Give it a minute or two to enable the feature.
    
    ![](./img/dr4.png)

5. You should now see that **Nutanix Disaster Recovery enabled** on the same screen.

    ![](./img/dr5.png)

6. Now repeat **steps 1-4** to turn on Nutanix Disaster Recovery in the target cluster.

## Create New Availability Zone

1. Login to source Prism Central.

2. On the dashboard on the left, turn on **Administration** drop-down menu.
   
    ![](./img/az2.png)
   

3. Click on **Availability Zones**.

4. Click on **Connect to Availability Zone**.

    ![](./img/az4.png) 

5. At Select Type, select **Physical Location**.

    ![](./img/az5.png) 

6. To connect to your target cluster, input the Prism Central credentials as shown below. Click **Connect**
   to proceed.

    ![](./img/az6.png)

7. At the top banner, you should also see a notification that shows connecitivy to be successfully.

    ![](./img/az7.png)

8. Give it a minute or two and once the connection is established, you should see the target Prism Central 
connection as below.

    ![](./img/az8.png)

8. That's conclude the setup.

!!! note
    
    Should you have a three way DR scenario, you can add more Prism Central connections 
    with the same steps as shown above.





   


