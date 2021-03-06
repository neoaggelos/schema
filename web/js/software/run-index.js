$(document).ready(function() {
	$("#software-start-run-button").click(function(){

		var disabled = $(this).attr('disabled');
		if (!disabled)
		{
			totalFields=Number($("#hidden_fieldsNum").val());
			for (i=0; i<totalFields; i++)
	        {
	        	var fieldID="#field-" + i;
	            var field=$(fieldID);
	            field.addClass('disabled-box');
	            field.prop('readonly',true);
	        }
	        $("#systemmount").addClass('disabled-box');
	        $("#memory").addClass('disabled-box');
	        $("#cores").addClass('disabled-box');
	        $("#systemmount").prop('readonly',true);
	        $("#memory").prop('readonly',true);
	        $("#cores").prop('readonly',true);
			$("#command-text-box").prop('readonly',true)
			$("#command-text-box").addClass('disabled-box');
			$(".add-example-link").hide();
			$("#software_commands_form").submit();
		}

	
	});

	//if the example button is pressed make the command box active
	// $(".software-example-button").click(function(){
	// 	$("#active-run-form").show();
	// 	$("#select-active-form-btn").addClass('active-tab');
	// 	$("#non-active-run-form").hide();
	// 	$("#select-non-active-form-btn").removeClass('active-tab');
		
	// 	var commands=$("#hidden_example_input").val();
	// 	$("#command-text-box").val(commands);
	// 	$("#command-text-box").prop('readonly',true)
	// 	$("#command-text-box").addClass('disabled-box');
	// 	$("#software_commands_form").submit();
	
	// });

	//on submit show command box
	// if ($("#command-text-box").prop('readonly')==true)
	// {
	// 	$("#command-text-box").addClass('disabled-box');
	// 	$("#active-run-form").show();
	// 	$("#non-active-run-form").hide();
	// 	// $("#select-active-form-btn").addClass('disabled-btn');
	// 	// $("#select-non-active-form-btn").addClass('disabled-btn');
	// }

	// $("#select-active-form-btn").click(function(){
	// 	if ($("#select-active-form-btn").hasClass('disabled-btn')==false)
	// 	{
	// 		$("#active-run-form").show();
	// 		$("#select-active-form-btn").addClass('active-tab');
	// 		$("#non-active-run-form").hide();
	// 		$("#select-non-active-form-btn").removeClass('active-tab');
			
	// 	}

	// });

	// $("#select-non-active-form-btn").click(function(){
	// 	if ($("#select-non-active-form-btn").hasClass('disabled-btn')==false)
	// 	{
	// 		// var command=$("#command-text-box").val();
	// 		// var tokens=command.split(" ");
	// 		// var total=tokens.length;
	// 		// var i;

	// 		// for (i=0; i<=total; i++)
	// 		// {
	// 		// 	$("#field-" + i).val(tokens[i]);
	// 		// }
	// 		$("#active-run-form").hide();
	// 		$("#select-active-form-btn").removeClass('active-tab');
	// 		$("#non-active-run-form").show();
	// 		$("#select-non-active-form-btn").addClass('active-tab');
	// 	}

	// });

	$(".select-mount-button").click(function(){
		var disabled = $(this).attr('disabled');
		if (!disabled)
		{
			var caller=$(this).parent().children('.mount-field').attr('id');
			$("#mountcaller").val("#" + caller);
			// window.alert(caller);
			var link = $("#selectmounturl").val();
			window.open(link, "Ratting",
				"height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no");
		}
	});

	$(".clear-mount-button").click(function(){
		var mountf=$(this).parent().children('.mount-field');
		mountf.val('');
		mountf.trigger("change");
	});

	$("#isystemmount").change(function(){
		if ($(".mount-exist-error").length)
		{
			$(".mount-exist-error").hide();
			$("#software-start-run-button").removeClass('hidden-element');
		}

		totalFields=Number($("#hidden_fieldsNum").val());
		for (i=0; i<totalFields; i++)
        {
        	var fieldID="#field-" + i;
            var field=$(fieldID);
            hiddenInput=field.parent().children('.hidden_select_file_url');
            if (hiddenInput.length)
            {
            	field.val('');
            }
            hiddenInput=field.parent().children('.hidden_select_folder_url');
            if (hiddenInput.length)
            {
            	field.val('');
            }
        }

	});

	$("#osystemmount").change(function(){
		if ($(".mount-exist-error").length)
		{
			$(".mount-exist-error").hide();
			$("#software-start-run-button").removeClass('hidden-element');
		}

	});

	$("#iosystemmount").change(function(){
		if ($(".mount-exist-error").length)
		{
			$(".mount-exist-error").hide();
			$("#software-start-run-button").removeClass('hidden-element');
		}

		totalFields=Number($("#hidden_fieldsNum").val());
		// window.alert(totalFields);
		totalFields=Number($("#hidden_fieldsNum").val());
		for (i=0; i<totalFields; i++)
        {
        	var fieldID="#field-" + i;
            var field=$(fieldID);
            hiddenInput=field.parent().children('.hidden_select_file_url');
            if (hiddenInput.length)
            {
            	field.val('');
            }
            hiddenInput=field.parent().children('.hidden_select_folder_url');
            if (hiddenInput.length)
            {
            	field.val('');
            }
        }
	});

	$(".btn-default-values").click(function(){
		var disabled = $("#software-start-run-button").attr('disabled');
		if (!disabled)
		{
			var grandparent=$(this).parent().parent();
			var hidden_val=grandparent.children(".hidden_default_value").val();
			// window.alert(grandparent.html());
			grandparent.find(".input_field").val(hidden_val);
		}
	});

	$("#software-run-example-button").click(function(){
		var disabled = $(this).attr('disabled');
		//window.alert($("#software_commands_form").html());
		if (!disabled)
		{

			$("#hidden_example_input").val("1");
			$(".add-example-link").hide();
			$("#software_commands_form").submit();
		}
		
	});

	$(".select-file-btn").click(function(){
		var mount='';
		if ($("#iosystemmount").length)
			mount=$("#iosystemmount").val();

		if ($("#isystemmount").length)
			mount=$("#isystemmount").val();

		var disabled = $(this).attr('disabled');
		if (!disabled)
		{
			var link = $(this).parent().children('.hidden_select_file_url').val() + '&folder=' + mount;
			// window.alert(link);
			window.open(link, "Ratting",
				"height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no");
		}
	});

	$(".fill-array-field-btn").click(function(){

		var disabled = $(this).attr('disabled');
		if (!disabled)
		{
			var content=$(this).parent().children('.array_field').val();
			// var link = $(this).parent().html();//children('.hidden_fill_array_url').val();
			// window.alert(link);
			var link = $(this).parent().children('.hidden_fill_array_field_url').val() + '&content=' + content;
			// window.alert(link);
			window.open(link, "Ratting",
				"height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no");
		}
	});


	$(".clear-file-btn").click(function(){
		var field=$(this).parent().children('.input_field');
		field.val('');
		field.trigger("change");
	});

	$(".select-folder-btn").click(function(){
		var mount='';
		if ($("#iosystemmount").length)
			mount=$("#iosystemmount").val();

		if ($("#isystemmount").length)
			mount=$("#isystemmount").val();

		var disabled = $(this).attr('disabled');
		if (!disabled)
		{
			var link = $(this).parent().children('.hidden_select_folder_url').val() + '&folder=' + mount;
			// window.alert(link);
			window.open(link, "Ratting",
				"height=500,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no");
		}
	});


	$(".clear-folder-btn").click(function(){
		var field=$(this).parent().children('.input_field');
		field.val('');
		field.trigger("change");
	});

	function triggerFromChild()
	{
		$("#systemmount").trigger('change');
	}
	
	//$("#software-start-run-button").click(function(){
	//	var project=$(".project-dropdown").val();
	//	alert(project);
	//	});
	
	$("#software-run-example-button").click(function(){
		var project=$(".project-dropdown").val();
		//window.alert(project);
		});

	$(".instructions").click(function() { 

		var name=$('.name').html();
		var version=$('.version').html();
		var modal=$('#instructions-modal-' + name + '-' + version.replace(/\./g, '\\.'));
		//window.alert(modal);
		modal.modal();

	});

});