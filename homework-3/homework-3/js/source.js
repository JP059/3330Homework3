$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************


    $("#username").empty();
    $(".revenue-amt").empty();
    $("#customer-num").empty();
    $("#orders-amt").empty();
    $("#issues-amt").empty();
    $("#salesTableBody").empty();
    $("#activity-list").empty();
    $("#customerTableBody").empty();
    $("#system-status-list").empty();
    $("#notifications-list").empty();
    $("#tasks-list").empty();
    $("#notification-num").empty();

    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);

    function renderSales() {
        const $salesBody = $("#salesTableBody");

        sales.forEach((item) => {
            const $row = $("<tr>");
            $row.append($("<td>").text(item.product));
            $row.append($("<td>").text(item.quantity));
            $row.append($("<td>").text(item.revenue));
            $salesBody.append($row);
        });
    }

    function renderActivities() {
        const $activityList = $("#activity-list");

        activities.forEach((item) => {
            $activityList.append($("<li>").text(item.message));
        });
    }

    function renderCustomers() {
        const $customerBody = $("#customerTableBody");

        customers.forEach((customer) => {
            const statusClass = customer.status === "Active" ? "status-active" : "status-pending";
            const $row = $("<tr>");

            $row.append($("<td>").text(customer.name));
            $row.append($("<td>").text(customer.email));
            $row.append($("<td>").append($("<span>").addClass(`status ${statusClass}`).text(customer.status)));
            $row.append($("<td>").text(customer.joined));

            $customerBody.append($row);
        });
    }

    function renderSystemStatus() {
        const $statusList = $("#system-status-list");

        messages.forEach((item) => {
            $statusList.append($("<li>").text(item.messsage));
        });
    }

    function renderNotifications() {
        const $notificationList = $("#notifications-list");

        notifications.forEach((item) => {
            $notificationList.append($("<li>").text(item.messsage));
        });

        $("#notification-num").text(notifAmt);
    }

    function renderTasks() {
        const $taskList = $("#tasks-list");

        tasks.forEach((item) => {
            $taskList.append($("<li>").text(item.messsage));
        });
    }

    renderSales();
    renderActivities();
    renderCustomers();
    renderSystemStatus();
    renderNotifications();
    renderTasks();

    $("button").button();
    $("#dashboardTabs").tabs();
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();
                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    $("#customerDate").datepicker({
        dateFormat: "mm/dd/yy"
    });

    });