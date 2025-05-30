# Migrate at Scale

## Migrate at Scale with Nutanix Move

You have now performed a basic migration 
of a VM and another utlizing some of the advanced features within Nutanix Move. 
This has prepared you for many questions and situations that are common in migrations.
In this segment we will now explore what it will be like to utilize Move for larger scale migrations.

Armed with the knowledge you have already learned and your past experiences you will be guided 
on how to utilize Move regardless if its a couple of VMs or thousands.

1. Nutanix Move is deployed as a virtual appliance as you have been using it. A single Move appliance 
is capable of moving all of the workloads for most customers migrations.

    - There are a few scenarios where an organization might need to utilize multiple Move appliances.
    - If there were network access or segmentation that prevented a single appliance from connecting to 
   all needed sources and targets. This might require multiple appliances to live in the different network 
   zones.

2. How many migration plans within a Move appliance should an organization use?

    - As many as the customer needs or wants based on their size, complexity, and change windows available as 
    an example.
    - There will be a balance that makes sense thats in between just having a couple of huge groups 
    and a plan for each individual VM.
    - It likely makes sense for the different tiers and pieces of an application to be moved together in 
    most cases. So grouping the app, web, and data tiers together and only requiring a single change window 
    would makes sense to most. Depending on the scale this can be done with a single plan or might require 
    multiple.

3. If an organizations is creating and using large migration plans does that mean then must cut them all over together?

    - No, while an entire plan can be failed over as a whole. Move allows as little as a single VM within a plan to be cutover or groups of VMs.

4. To give an example of some of these scenarioes, we have created a click-through demo for this section of 
the lab. 
Click [here](<https://nutanix.storylane.io/share/lgdif4kb7zps?utm=gtsmigrate>) to launch the Move at Scale Demo.

     Come back to this lab guide when you've completed the demo.