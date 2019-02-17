<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;
use DB;

class CommentController extends Controller
{
    public function add(Request $r){
        $comment=new Comment();
        $comment->fkemployeeId=$r->id;
        $comment->comment=$r->comment;
        $comment->commentBy=auth()->user()->id;
        $comment->save();

    }

    public function get(Request $r){
//        return $r;
        $comments=Comment::where('fkemployeeId',$r->id)
            ->whereBetween(DB::raw('date(created_at)'),[$r->startDate,$r->endDate])
            ->get();

        return $comments;
    }
}
