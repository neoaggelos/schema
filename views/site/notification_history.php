<?php


/**
 * This view file prints the history of software runs made by a user
 * 
 * @author: Kostis Zagganas
 * First version: March 2019
 */

use yii\helpers\Html;
use yii\widgets\LinkPager;

$this->title="Notification History";

$back_icon='<i class="fas fa-arrow-left"></i>';

/*
 * Users are able to view the name, version, start date, end date, mountpoint 
 * and running status of their previous software executions. 
 */
?>
<div class='title row'>
	<div class="col-md-11">
		<h1><?= Html::encode($this->title) ?></h1>
	</div>
	<div class="col-md-1 float-right">
		<?= Html::a("$back_icon Back to software", ['software/index'], ['class'=>'btn btn-default']) ?>
	</div>
</div>

<div class="row">&nbsp;</div>

<div class="row"><div class="col-md-12 text-center"><?= LinkPager::widget(['pagination' => $pages]) ?></div></div>
<div class="row">&nbsp;</div>

<?php

if (!empty($notifications))
{
?>

<table class="table table-responsive table-striped">
	<thead>
		<tr>
			<th class="col-md-10">Notification message</th>
			<th class="col-md-2">Created at</th>
		</tr>
	</thead>
	<tbody>
		<?php

			
		foreach ($notifications as $notif)
		{
		?>
			
			<tr class="<?=$typeClass[$notif['type']]?>">
				<td class="col-md-10"><?=Html::a($notif['message'],$notif['url'])?></th>
				<td class="col-md-2"><?= date("j-m-Y, H:i:s",strtotime($notif['created_at']))?></td>
			</tr>
		<?php 		
		}
		?>
		
	</body>
</table>

<?php
}

else
{
?>

	<div class="row"><div class='col-md-12'><h3>There are no notifications in your history.</h3></div></div>

<?php	
}



