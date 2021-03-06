<?php

namespace app\models;

use Yii;
use yii\db\Query;

/**
 * This is the model class for table "run_history".
 *
 * @property int $id
 * @property string $username
 * @property string $start
 * @property string $stop
 * @property string $command
 * @property string $status
 * @property string $mountpoint
 * @property string $jobid
 * @property string $softname
 * @property string $softversion
 * @property double $ram
 * @property int $cpu
 * @property string $machinetype
 * @property string $project
 */
class RunHistory extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'run_history';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['start', 'stop'], 'safe'],
            [['command', 'machinetype', 'project'], 'string'],
            [['ram'], 'number'],
            [['cpu'], 'default', 'value' => null],
            [['cpu'], 'integer'],
            [['username', 'status'], 'string', 'max' => 50],
            [['imountpoint','omountpoint', 'iomountpoint'], 'string', 'max' => 200],
            [['jobid'], 'string', 'max' => 20],
            [['softname'], 'string', 'max' => 100],
            [['softversion'], 'string', 'max' => 80],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'username' => 'Username',
            'start' => 'Start',
            'stop' => 'Stop',
            'command' => 'Command',
            'status' => 'Status',
            'mountpoint' => 'Mountpoint',
            'jobid' => 'Jobid',
            'softname' => 'Softname',
            'softversion' => 'Softversion',
            'ram' => 'Ram',
            'cpu' => 'Cpu',
            'machinetype' => 'Machinetype',
            'project' => 'Project',
        ];
    }

    public static function getProjectUsage($project)
    {
        $query=new Query;

        $result=$query->select(['COUNT(*)','DATE_TRUNC(\'second\',SUM(stop-start)) AS total_time','DATE_TRUNC(\'second\',AVG(stop-start)) AS avg_time', 'AVG(ram) AS ram', 'AVG(cpu) AS cpu'])
              ->from('run_history')
              ->where(['project'=>$project])
              ->andFilterWhere(
                [
                    'or',
                    ['status'=>'Complete'],
                    [
                        'and',
                        ['status'=>'Cancelled'],
                        "stop-start>='00:00:60'"
                    ]
                ])
              ->groupBy('project')
              ->one();

              return $result;
    }
}
