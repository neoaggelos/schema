<?php
/**
 * View file for the software edit form
 * 
 * @author: Kostis Zagganas
 * First version: Dec 2018
 */

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\Url;
use dosamigos\ckeditor\CKEditor;

/* @var $this yii\web\View */
/* @var $model app\models\SoftwareUpload */
/* @var $form ActiveForm */



echo Html::cssFile('@web/css/software/edit-software.css');
$this->registerJsFile('@web/js/software/edit-software.js', ['depends' => [\yii\web\JqueryAsset::className()]] );
?>
<h2 class="headers">Edit details for software <?=$model->name?> v.<?=$model->version?></h2>
<br />
<div class="software_edit">
    
    <?php $form = ActiveForm::begin(); 
    ?>
    <?= $form->errorSummary($model) ?>
    <?=$form->field($model, 'description')->widget(CKEditor::className(), [
                     'options' => ['rows' => 4],
                     'preset' => 'basic'
                ])
                ?> 
    <?php
        echo $form->field($model, 'instructions')->widget(CKEditor::className(), [
                     'options' => ['rows' => 4],
                     'preset' => 'basic'
                ]);
                ?>
    <?=$form->field($model, 'visibility')->dropDownList($vdropdown,['options'=>[$model->visibility => ['selected'=>true]]]) ?>
    <?= $form->field($model, 'covid19') -> checkbox(['id'=>'covid19', "uncheck"=>'0']) ?>
    <?=$form->field($model, 'biotools')->textInput() ?>
    <div class="doi-container">
        <div class="row"><div class="col-md-12"><?= Html::label('Edit relevant dois (optional)') ?></div></div>
        <div class="row">
            <div class="col-md-11"><?= Html::input('','doi-input','',['id'=>'doi-input'])?></div>
            <div class="col-md-1 float-right"><?= Html::a('Add','javascript:void(0);',['class'=>'btn btn-secondary','id'=>'doi-add-btn']) ?></div>
        </div>
        <div class="row">
            <div class="col-md-5"><div class="doi-list">
<?php

            foreach ($model->dois as $doi)
            {
?>
                <div class='doi-entry-container'>
                    <i class='fas fa-times'></i>&nbsp;<?=$doi?>
                    <?=Html::hiddenInput('dois[]',$doi)?>
                </div>
<?php
            }
?>

            </div></div>
        </div>
    </div>

    <div class="row">&nbsp;</div>

    <div>
        <?=Html::a('Download workflow files',['/workflow/download-files', 'name'=>$model->name, 'version'=>$model->version])?>
    </div>
    <br \>	
        <div class="form-group">
            <?= Html::submitButton('Submit', ['class' => 'btn btn-primary']) ?>
            <?= Html::a('Cancel', ['/software/index'], ['class'=>'btn btn-default']) ?>
        
    <?php ActiveForm::end(); ?>

</div><!-- software_upload -->
